import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DepositComponent } from '../deposit/components/deposit/deposit.component';
import { SharedModule } from '../shared/shared.module';
import { CashierRoutingModule } from './cashier-routing.module';
import { BonusCodeComponent } from './components/bonus-code/bonus-code.component';
import { CashierLayoutComponent } from './components/cashier-layout/cashier-layout.component';
import { DepositLimitComponent } from './components/deposit-limit/deposit-limit.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { WithdrawalRequestComponent } from './components/withdrawal-request/withdrawal-request.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { CashierEffects } from './state/cashier.effects';
import { cashierReducer } from './state/cashier.reducers';

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
  ],
  imports: [
    CommonModule,
    CashierRoutingModule,
    SharedModule,
    StoreModule.forFeature('cashier', cashierReducer),
    EffectsModule.forFeature([CashierEffects]),
    FormsModule,
  ],
})
export class CashierModule {}
