import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPortalRoutingModule } from './customer-portal-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrivateInfoComponent } from './components/private-info/private-info.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { GameHistoryComponent } from './components/game-history/game-history.component';
import { BuddiesComponent } from './components/buddies/buddies.component';
import { LimitsComponent } from './components/limits/limits.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { CustomerPortalLayoutComponent } from './components/customer-portal-layout/customer-portal-layout.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [
    CommonModule,
    CustomerPortalRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class CustomerPortalModule {}
