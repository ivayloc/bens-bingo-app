import { Component, Input, OnInit } from '@angular/core';
import { UserBalance } from '../../models/user-balance';

@Component({
  selector: 'app-account-funds',
  templateUrl: './account-funds.component.html',
  styleUrls: ['./account-funds.component.scss'],
})
export class AccountFundsComponent implements OnInit {
  @Input() funds = {} as UserBalance;

  constructor() {}

  ngOnInit(): void {}
}
