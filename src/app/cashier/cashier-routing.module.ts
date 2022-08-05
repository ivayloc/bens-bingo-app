import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusCodeComponent } from './components/bonus-code/bonus-code.component';
import { CashierLayoutComponent } from './components/cashier-layout/cashier-layout.component';
import { DepositLimitComponent } from './components/deposit-limit/deposit-limit.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { RequestWithdrawalComponent } from './components/request-withdrawal/request-withdrawal.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';

const routes: Routes = [
  {
    path: '',
    component: CashierLayoutComponent,
    children: [
      { path: '', redirectTo: 'deposit' },
      { path: 'deposit', component: DepositComponent },
      {
        path: 'withdrawal',
        component: WithdrawalComponent,
        children: [{ path: ':id', component: RequestWithdrawalComponent }],
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
