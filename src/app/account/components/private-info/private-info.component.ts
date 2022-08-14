import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { UpdatedUserInfo } from '../../models/updated-user-info';
import { UserInfo } from '../../models/user-info';
import { getUserInfo } from '../../state';
import { AccountPageActions } from '../../state/actions';

@Component({
  selector: 'app-private-info',
  templateUrl: './private-info.component.html',
  styleUrls: ['./private-info.component.scss'],
})
export class PrivateInfoComponent implements OnInit {
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

  getUserInfo$ = new Observable<UserInfo>();

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(AccountPageActions.loadUserInfo());

    this.getUserInfo$ = this.store.select(getUserInfo).pipe(
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
        mobilephone: userInfo?.phoneNumbers[0].phone,
        bday: userInfo.birthdate, // parse(userInfo.birthdate, 'yyyy-MM-dd', new Date()),
      },
    });
  }

  updateUserInfo() {
    if (this.accountInfoForm.invalid) {
      return;
    }
    const payload: UpdatedUserInfo = this.accountInfoForm.getRawValue();
    this.store.dispatch(AccountPageActions.updateUserInfo({ payload }));
  }
}
