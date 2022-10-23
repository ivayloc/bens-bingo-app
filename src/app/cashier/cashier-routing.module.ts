import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { BonusCodeComponent } from './components/bonus-code/bonus-code.component';
import { CashierLayoutComponent } from './components/cashier-layout/cashier-layout.component';
import { DepositLimitComponent } from './components/deposit-limit/deposit-limit.component';
import { WithdrawalRequestComponent } from './components/withdrawal-request/withdrawal-request.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';

const routes: Routes = [
  {
    path: '',
    component: CashierLayoutComponent,
    children: [
      {
        path: 'deposit',
        loadChildren: () =>
          import('../deposit/deposit.module').then((m) => m.DepositModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
      },
      {
        path: 'withdrawal',
        component: WithdrawalComponent,
        children: [{ path: ':id', component: WithdrawalRequestComponent }],
      },
      { path: 'deposit-limit', component: DepositLimitComponent },
      { path: 'bonus-code', component: BonusCodeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierRoutingModule {}
