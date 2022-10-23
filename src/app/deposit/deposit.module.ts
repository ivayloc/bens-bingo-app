import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { DepositAddEditCardComponent } from './components/deposit-add-edit-card/deposit-add-edit-card.component';
import { DepositSelectedMethodComponent } from './components/deposit-selected-method/deposit-selected-method.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { DepositRoutingModule } from './deposit-routing.module';

@NgModule({
  declarations: [
    DepositSelectedMethodComponent,
    DepositAddEditCardComponent,
    DepositComponent,
  ],
  imports: [
    CommonModule,
    DepositRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    StoreModule.forFeature('deposits', cashierReducer),
    EffectsModule.forFeature([CashierEffects]),
  ],
})
export class DepositModule {}
