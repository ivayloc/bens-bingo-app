import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppPageActions } from 'src/app/state/actions';
import { LoginResetPasswordComponent } from '../login-reset-password/login-reset-password.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent {
  loginForm = this.fb.group({
    email: ['bencasino', Validators.required],
    password: ['123456abc', Validators.required],
  });
  isForgotUsernamePasswordActive = false;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private path: string
  ) {}

  login() {
    const { email, password } = this.loginForm.value;

    if (this.loginForm.valid) {
      this.store.dispatch(
        AppPageActions.userLogin({ payload: { email, password } })
      );
    }
  }

  close() {
    this.dialogRef.close();
    this.router.navigateByUrl('/');
  }

  showForgotUsernamePassword() {
    this.dialogRef.close();

    this.dialog.open(LoginResetPasswordComponent, {
      width: '100%',
    });
  }
}
