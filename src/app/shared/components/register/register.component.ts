import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppPageActions } from 'src/app/state/actions';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  currencies = ['EUR', 'SEK', 'NOK', 'AUD'];

  registerForm = this.fb.group({
    userdata: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required, this.validatorsService.username()],
      email: [
        '',
        [Validators.required, Validators.email],
        this.validatorsService.email(),
      ],
      password: ['', Validators.required, this.validatorsService.password()],
      mobilephone: ['', Validators.required],
      bday: ['', Validators.required],
      currency: ['', Validators.required],
      language: 'en',
    }),
    subscription: this.fb.group({
      email: '',
      sms: '',
    }),
    terms: ['', Validators.requiredTrue],
    couponcode: '',
    signuptype: 'full',
    accounttype: 'normal',
  });

  get passwordControl(): UntypedFormControl {
    return this.registerForm.get('userdata.password') as UntypedFormControl;
  }

  get emailControl(): UntypedFormControl {
    return this.registerForm.get('userdata.email') as UntypedFormControl;
  }

  get usernameControl(): UntypedFormControl {
    return this.registerForm.get('userdata.username') as UntypedFormControl;
  }

  constructor(
    private store: Store,
    private fb: UntypedFormBuilder,
    private validatorsService: ValidatorsService
  ) {}

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    const payload = this.registerForm.getRawValue();
    this.store.dispatch(AppPageActions.userRegistration({ payload }));
  }
}
