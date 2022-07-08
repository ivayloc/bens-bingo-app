import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CustomerPortalRoutingModule } from './account-routing.module';
import { AccountFundsComponent } from './components/account-funds/account-funds.component';
import { CustomerPortalLayoutComponent } from './components/account-layout/account-layout.component';
import { BuddiesComponent } from './components/buddies/buddies.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameHistoryComponent } from './components/game-history/game-history.component';
import { LimitsComponent } from './components/limits/limits.component';
import { PrivateInfoComponent } from './components/private-info/private-info.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PrivateInfoComponent,
    TransactionHistoryComponent,
    GameHistoryComponent,
    BuddiesComponent,
    LimitsComponent,
    PublicProfileComponent,
    CustomerPortalLayoutComponent,
    AccountFundsComponent,
  ],
  imports: [
    CommonModule,
    CustomerPortalRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class CustomerPortalModule {}
