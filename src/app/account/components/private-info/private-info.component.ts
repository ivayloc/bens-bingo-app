import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import format from 'date-fns/format';
import { Observable, tap } from 'rxjs';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { selectUserInfo } from 'src/app/state';
import { AppPageActions } from 'src/app/state/actions';
import { UserInfo } from '../../../shared/models/user-info';
import { UpdatedUserInfo } from '../../models/updated-user-info';
import { AccountPageActions } from '../../state/actions';

@Component({
  selector: 'app-private-info',
  templateUrl: './private-info.component.html',
  styleUrls: ['./private-info.component.scss'],
})
export class PrivateInfoComponent implements OnInit {
  @ViewChild('changePasswordFormEl')
  private changePasswordFormEl!: ElementRef<HTMLFormElement>;

  accountInfoForm = this.fb.group({
    userdata: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: '',
      city: '',
      state: '',
      zip: '',
      mobilephone: ['', Validators.required],
      bday: ['', Validators.required],
    }),
    subscription: this.fb.group({
      email: true,
      sms: true,
    }),
    signuptype: 'update',
    siteid: 95,
  });

  changePasswordForm = this.fb.group(
    {
      currentpassword: ['', Validators.required],
      newpassword: [
        '',
        [Validators.required, this.passwordMatchValidator],
        this.validatorsService.password(),
      ],
      verifypassword: ['', [Validators.required, this.passwordMatchValidator]],
    }
    // { validators: [this.passwordMatchValidator] }
  );

  private passwordMatchValidator(
    formGroup: AbstractControl
  ): ValidationErrors | null {
    const newpassword = formGroup.parent?.get('newpassword');
    const verifypassword = formGroup.parent?.get('verifypassword');

    if (newpassword && verifypassword?.pristine) {
      return null;
    }

    return newpassword?.value === verifypassword?.value
      ? null
      : { mismatch: true };
  }

  getUserInfo$ = new Observable<UserInfo>();

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(AppPageActions.loadUserInfo());

    this.getUserInfo$ = this.store.select(selectUserInfo).pipe(
      tap((userInfo) => {
        this.setUserInfo(userInfo);
      })
    );
  }

  private setUserInfo(userInfo: UserInfo) {
    if (!userInfo || !Object.keys(userInfo).length) {
      return;
    }

    this.accountInfoForm.patchValue({
      userdata: {
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        address: userInfo.address,
        city: userInfo.city,
        state: userInfo.state,
        zip: userInfo.zip,
        bday: userInfo.birthdate,
      },
    });

    if (userInfo?.phoneNumbers?.length) {
      this.accountInfoForm
        ?.get('mobilephone')
        ?.setValue(userInfo?.phoneNumbers[0].phone);
    }
  }

  updateUserInfo() {
    if (this.accountInfoForm.invalid) {
      return;
    }
    const payload: UpdatedUserInfo = this.accountInfoForm.getRawValue();
    payload.userdata.bday = format(
      new Date(payload.userdata.bday),
      'yyy-MM-dd'
    );
    this.store.dispatch(AccountPageActions.updateUserInfo({ payload }));
  }

  changePassword() {
    const { newpassword, currentpassword } =
      this.changePasswordForm.getRawValue();

    this.store.dispatch(
      AccountPageActions.changePassword({
        payload: { newpassword, currentpassword },
      })
    );

    this.changePasswordFormEl.nativeElement.reset();
  }
}
