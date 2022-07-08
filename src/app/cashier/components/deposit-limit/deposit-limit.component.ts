import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deposit-limit',
  templateUrl: './deposit-limit.component.html',
  styleUrls: ['./deposit-limit.component.scss'],
})
export class DepositLimitComponent implements OnInit {
  depositLimitForm = this.fb.group({
    amount: '',
    timeFrame: '',
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
