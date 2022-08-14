import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppPageActions } from 'src/app/state/actions';

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

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<LoginDialogComponent>
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
}
