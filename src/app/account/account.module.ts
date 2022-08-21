import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountFundsComponent } from './components/account-funds/account-funds.component';
import { CustomerPortalLayoutComponent } from './components/account-layout/account-layout.component';
import { FriendsComponent } from './components/buddies/buddies.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameHistoryComponent } from './components/game-history/game-history.component';
import { LimitsComponent } from './components/limits/limits.component';
import { PrivateInfoComponent } from './components/private-info/private-info.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { AccountEffects } from './state/account.effects';
import { accountReducer } from './state/account.reducers';
import { UserProfileDialogComponent } from './components/user-profile-dialog/user-profile-dialog.component';
import { Top5GamesComponent } from './components/top5-games/top5-games.component';
import { PublicProfileEditComponent } from './components/public-profile-edit/public-profile-edit.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PrivateInfoComponent,
    TransactionHistoryComponent,
    GameHistoryComponent,
    FriendsComponent,
    LimitsComponent,
    PublicProfileComponent,
    CustomerPortalLayoutComponent,
    AccountFundsComponent,
    UserProfileDialogComponent,
    Top5GamesComponent,
    PublicProfileEditComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('account', accountReducer),
    EffectsModule.forFeature([AccountEffects]),
  ],
})
export class AccountModule {}
