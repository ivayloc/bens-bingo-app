import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectResetPasswordMethods } from 'src/app/state';
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
  getPasswordResetMethods$ = new Observable<any>();

  public get accountIdentifierField(): FormControl {
    return this.resetPasswordForm.get('accountIdentifier') as FormControl;
  }

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginResetPasswordComponent>
  ) {}

  ngOnInit(): void {
    this.getPasswordResetMethods$ = this.store.select(
      selectResetPasswordMethods
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
}
