import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { CashierRoutingModule } from './cashier-routing.module';
import { BonusCodeComponent } from './components/bonus-code/bonus-code.component';
import { CashierLayoutComponent } from './components/cashier-layout/cashier-layout.component';
import { DepositAddEditCardComponent } from './components/deposit-add-edit-card/deposit-add-edit-card.component';
import { DepositLimitComponent } from './components/deposit-limit/deposit-limit.component';
import { DepositSelectedMethodComponent } from './components/deposit-selected-method/deposit-selected-method.component';
import { DepositStartComponent } from './components/deposit-start/deposit-start.component';
import { DepositWtihPaymentMethodComponent } from './components/deposit-wtih-payment-method/deposit-wtih-payment-method.component';
import { DepositComponent } from './components/deposit/deposit.component';
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
    DepositSelectedMethodComponent,
    DepositStartComponent,
    DepositWtihPaymentMethodComponent,
    DepositAddEditCardComponent,
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
