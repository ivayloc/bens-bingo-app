import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  currencies = ['EUR', 'SEK', 'NOK', 'AUD'];

  registerForm = this.fb.group({
    userdata: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobilephone: ['', Validators.required],
      bday: ['', Validators.required],
      currency: ['', Validators.required],
    }),
    subscription: this.fb.group({
      email: '',
      sms: '',
    }),
    terms: '',
    couponcode: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
