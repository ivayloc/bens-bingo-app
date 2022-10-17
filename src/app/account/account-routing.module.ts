import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPortalLayoutComponent } from './components/account-layout/account-layout.component';
import { FriendsComponent } from './components/buddies/buddies.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GameHistoryComponent } from './components/game-history/game-history.component';
import { LimitsComponent } from './components/limits/limits.component';
import { PrivateInfoComponent } from './components/private-info/private-info.component';
import { PublicProfileEditComponent } from './components/public-profile-edit/public-profile-edit.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerPortalLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'private-info', component: PrivateInfoComponent },
      { path: 'public-profile', component: PublicProfileComponent },
      { path: 'public-profile/edit', component: PublicProfileEditComponent },
      { path: 'transaction-history', component: TransactionHistoryComponent },
      { path: 'game-history', component: GameHistoryComponent },
      { path: 'buddies', component: FriendsComponent },
      { path: 'limits', component: LimitsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
