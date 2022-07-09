import { Component, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/shared/models/navigation-item';

@Component({
  selector: 'app-cashier-layout',
  templateUrl: './cashier-layout.component.html',
  styleUrls: ['./cashier-layout.component.scss'],
})
export class CashierLayoutComponent {
  navigationLinks: NavigationItem[] = [
    { url: '/cashier/deposit', title: 'Deposit' },
    { url: '/cashier/withdrawal', title: 'Withdrawal' },
    { url: '/cashier/deposit-limit', title: 'Deposit Limit' },
    { url: '/cashier/bonus-code', title: 'Bonus Code' },
  ];
  constructor() {}
}
