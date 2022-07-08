import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-private-info',
  templateUrl: './private-info.component.html',
  styleUrls: ['./private-info.component.scss'],
})
export class PrivateInfoComponent {
  accountInfoForm = this.fb.group({
    userdata: this.fb.group({
      firstname: ['John', Validators.required],
      lastname: ['Doe', Validators.required],
      address: '1234 Yonge Street.',
      city: 'Toronto',
      state: 'Ontario',
      zip: 'M41B2C',
      mobilephone: ['416-555-1214', Validators.required],
      bday: ['1900-01-01', Validators.required],
    }),
    subscription: this.fb.group({
      email: true,
      sms: true,
    }),
    signuptype: 'update',
    siteid: 95,
  });

  constructor(private fb: FormBuilder) {}
}
