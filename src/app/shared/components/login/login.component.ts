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
  loginForm = new FormGroup({});
  isOpen = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['bencasino', Validators.required],
      password: ['123456abc', Validators.required],
    });
  }

  toggleLoginPane(): void {
    this.isOpen = !this.isOpen;
  }

  login() {
    const val = this.loginForm.value;
    if (val.email && val.password) {
      this.authService
        .login(val.email, val.password)
        .subscribe(({ success }) => {
          if (success) {
            this.toggleLoginPane();
            this.router.navigateByUrl('/account');
          }
        });
    }
  }
}
