import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectResetPasswordCodeSend,
  selectResetPasswordMethods,
} from 'src/app/state';
import { AppPageActions } from 'src/app/state/actions';

@Component({
  selector: 'app-login-reset-password',
  templateUrl: './login-reset-password.component.html',
  styleUrls: ['./login-reset-password.component.scss'],
})
export class LoginResetPasswordComponent implements OnInit {
  resetPasswordForm = this.fb.group({
    accountIdentifier: [],
  });
  resetPasswordMethodField = this.fb.control('');
  resetPasswordKeyField = this.fb.control('');
  getPasswordResetMethods$ = new Observable<any>();
  getResetPasswordCodeSend$ = new Observable<{
    resetPasswordCodeSend: boolean;
  }>();

  public get accountIdentifierField(): UntypedFormControl {
    return this.resetPasswordForm.get('accountIdentifier') as UntypedFormControl;
  }

  constructor(
    private store: Store,
    private fb: UntypedFormBuilder,
    private dialogRef: MatDialogRef<LoginResetPasswordComponent>
  ) {}

  ngOnInit(): void {
    this.getPasswordResetMethods$ = this.store.select(
      selectResetPasswordMethods
    );
    this.getResetPasswordCodeSend$ = this.store.select(
      selectResetPasswordCodeSend
    );
  }

  onSubmit() {
    this.store.dispatch(
      AppPageActions.resetPasswordInquiry({
        accountIdentifier: this.accountIdentifierField.value,
      })
    );
  }

  enterAccountIdentifier() {
    this.store.dispatch(AppPageActions.clearPasswordResetsMethods());
  }

  getPasswordResetCode() {
    const payload = {
      accountIdentifier: this.accountIdentifierField.value,
      method: this.resetPasswordMethodField.value,
    };

    this.store.dispatch(AppPageActions.getPasswordResetCode(payload));
  }

  submitResetKey() {
    const payload = {
      accountIdentifier: this.accountIdentifierField.value,
      resetKey: this.resetPasswordKeyField.value,
    };

    this.store.dispatch(AppPageActions.sendPasswordResetKey(payload));
  }
}
