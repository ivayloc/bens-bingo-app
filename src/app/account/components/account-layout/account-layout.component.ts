import { Component, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/shared/models/navigation-item';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss'],
})
export class CustomerPortalLayoutComponent {
  navigationLinks: NavigationItem[] = [
    { url: '/account/dashboard', title: 'Dashboard' },
    { url: '/account/private-info', title: 'Private Info' },
    // { url: '/account/public-profile', title: 'Public Profile' },
    { url: '/account/transaction-history', title: 'Transaction History' },
    { url: '/account/game-history', title: 'Game History' },
    { url: '/account/buddies', title: 'Buddies' },
    { url: '/account/limits', title: 'Limits' },
  ];
}
