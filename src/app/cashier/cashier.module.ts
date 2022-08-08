import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { CashierRoutingModule } from './cashier-routing.module';
import { BonusCodeComponent } from './components/bonus-code/bonus-code.component';
import { CashierLayoutComponent } from './components/cashier-layout/cashier-layout.component';
import { DepositLimitComponent } from './components/deposit-limit/deposit-limit.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { CashierEffects } from './state/cashier.effects';
import { cashierReducer } from './state/cashier.reducers';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { WithdrawalRequestComponent } from './components/withdrawal-request/withdrawal-request.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { DepositSelectedMethodComponent } from './components/deposit-selected-method/deposit-selected-method.component';

@NgModule({
  declarations: [
    CashierLayoutComponent,
    DepositComponent,
    WithdrawalComponent,
    DepositLimitComponent,
    BonusCodeComponent,
    PaymentMethodsComponent,
    PaymentMethodComponent,
    WithdrawalRequestComponent,
    DepositSelectedMethodComponent,
  ],
  imports: [
    CommonModule,
    CashierRoutingModule,
    SharedModule,
    StoreModule.forFeature('cashier', cashierReducer),
    EffectsModule.forFeature([CashierEffects]),
  ],
})
export class CashierModule {}
