import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { DepositAddEditCardComponent } from './components/deposit-add-edit-card/deposit-add-edit-card.component';
import { DepositLayoutComponent } from './components/deposit-layout/deposit-layout.component';
import { DepositSelectCardComponent } from './components/deposit-select-card/deposit-select-card.component';
import { DepositSelectNetellerComponent } from './components/deposit-select-neteller/deposit-select-neteller.component';
import { DepositRoutingModule } from './deposit-routing.module';
import { DepositsEffects } from './state/deposits.effects';
import { depositsReducer } from './state/deposits.reducers';
// import { depositsReducer } from './state/deposits.reducers';

@NgModule({
  declarations: [
    DepositAddEditCardComponent,
    DepositLayoutComponent,
    DepositSelectCardComponent,
    DepositSelectNetellerComponent,
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
