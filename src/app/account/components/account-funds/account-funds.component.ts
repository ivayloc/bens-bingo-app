import { Component, Input, OnInit } from '@angular/core';
import { UserBalance } from '../../models/user-balance';
import { UserInfo } from '../../models/user-info';

@Component({
  selector: 'app-account-funds',
  templateUrl: './account-funds.component.html',
  styleUrls: ['./account-funds.component.scss'],
})
export class AccountFundsComponent implements OnInit {
  @Input() userInfo = {} as UserInfo | null;

  constructor() {}

  ngOnInit(): void {}
}
