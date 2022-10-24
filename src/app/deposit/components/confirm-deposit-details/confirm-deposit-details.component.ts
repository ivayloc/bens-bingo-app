import { Component, OnInit } from '@angular/core';
import {
  NonNullableFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { PaymentMethod } from 'src/app/shared/models/payment-method';
import { UserInfo } from 'src/app/shared/models/user-info';
import { selectUserInfo } from 'src/app/state';
import { selectSelectedDepositMethod } from '../../state';
import { DepositsPageActions } from '../../state/actions';

@Component({
  selector: 'app-confirm-deposit-details',
  templateUrl: './confirm-deposit-details.component.html',
  styleUrls: ['./confirm-deposit-details.component.scss'],
})
export class ConfirmDepositDetailsComponent implements OnInit {
  getSelectedDepositMethod$ = new Observable<PaymentMethod | undefined>();
  confirmDepositDetailsForm = this.fb.group({
    userdata: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      birthdate: ['', Validators.required],
    }),
    signuptype: 'depositupdate',
  });

  getUserInfo$ = new Observable<UserInfo>();
  constructor(private store: Store, private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.getUserInfo$ = this.store.select(selectUserInfo).pipe(
      tap((userInfo) => {
        this.createUserDetailsForm(userInfo);
      })
    );
    this.getSelectedDepositMethod$ = this.store.select(
      selectSelectedDepositMethod
    );
  }

  createUserDetailsForm(userInfo: UserInfo) {
    const userdata = this.confirmDepositDetailsForm.get(
      'userdata'
    ) as UntypedFormGroup;
    userdata.patchValue(userInfo);
    Object.entries(userdata.controls).forEach(([controlName, { value }]) => {
      if (value) {
        userdata.get(controlName)?.disable();
      }
    });
  }

  confirmDeposit() {
    if (this.confirmDepositDetailsForm.invalid) {
      return;
    }
    const payload: any = this.confirmDepositDetailsForm.getRawValue();

    this.store.dispatch(
      DepositsPageActions.updateUserDepositDetails({
        payload,
      })
    );
  }

  // confirmDeposit() {
  //   this.store.dispatch(DepositsPageActions.confirmDeposit());
  // }
}
