import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppPageActions } from 'src/app/state/actions';

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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobilephone: ['', Validators.required],
      bday: ['', Validators.required],
      currency: ['', Validators.required],
    }),
    subscription: this.fb.group({
      email: '',
      sms: '',
    }),
    terms: '',
    couponcode: '',
  });

  constructor(private store: Store, private fb: FormBuilder) {}

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    const userData = this.registerForm.getRawValue();
    this.store.dispatch(AppPageActions.userRegistration(userData));
  }
}
