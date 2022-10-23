import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusCodeComponent } from './components/bonus-code/bonus-code.component';
import { CashierLayoutComponent } from './components/cashier-layout/cashier-layout.component';
import { DepositLimitComponent } from './components/deposit-limit/deposit-limit.component';
import { DepositSelectedMethodComponent } from './components/deposit-selected-method/deposit-selected-method.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawalRequestComponent } from './components/withdrawal-request/withdrawal-request.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';

const routes: Routes = [
  {
    path: '',
    component: CashierLayoutComponent,
    children: [
      { path: '', redirectTo: 'deposit', pathMatch: 'full' },
      {
        path: 'deposit',
        component: DepositComponent,
      },
      {
        path: 'deposit/:id',
        component: DepositSelectedMethodComponent,
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
