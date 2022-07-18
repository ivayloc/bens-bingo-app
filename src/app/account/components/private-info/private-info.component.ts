import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { UserBalance } from '../../models/user-balance';
import { UserInfo } from '../../models/user-info';
import { getUserInfo, getUserInfoBalance, State } from '../../state';
import { AccountPageActions } from '../../state/actions';
import parse from 'date-fns/parse';

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
  getUserInfoBalance$ = new Observable<UserBalance>();

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(AccountPageActions.loadUserInfo());

    this.getUserInfo$ = this.store.select(getUserInfo).pipe(
      tap((userInfo) => {
        if (!Object.keys(userInfo).length) {
          return;
        }
        console.log(
          userInfo.birthdate,
          parse(userInfo.birthdate, 'yyyy-MM-dd', new Date())
        );

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
      })
    );
    this.getUserInfoBalance$ = this.store.select(getUserInfoBalance);
  }
}
