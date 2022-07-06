import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['bencasino', Validators.required],
      password: ['123456abc', Validators.required],
    });
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService
        .login(val.email, val.password)
        .subscribe(({ success }) => {
          if (success) {
            this.router.navigateByUrl('/account');
          }
        });
    }
  }
}
