import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { DepositAddEditCardComponent } from './components/deposit-add-edit-card/deposit-add-edit-card.component';
import { DepositSelectedMethodComponent } from './components/deposit-selected-method/deposit-selected-method.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { DepositRoutingModule } from './deposit-routing.module';
import { DepositsEffects } from './state/deposits.effects';
import { depositsReducer } from './state/deposits.reducers';

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
    SharedModule,
    StoreModule.forFeature('deposits', depositsReducer),
    EffectsModule.forFeature([DepositsEffects]),
  ],
})
export class DepositModule {}
