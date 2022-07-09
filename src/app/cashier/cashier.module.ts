import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { CashierLayoutComponent } from './components/cashier-layout/cashier-layout.component';
import { SharedModule } from '../shared/shared.module';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { DepositLimitComponent } from './components/deposit-limit/deposit-limit.component';
import { BonusCodeComponent } from './components/bonus-code/bonus-code.component';

@NgModule({
  declarations: [CashierLayoutComponent, DepositComponent, WithdrawalComponent, DepositLimitComponent, BonusCodeComponent],
  imports: [CommonModule, CashierRoutingModule, SharedModule],
})
export class CashierModule {}
