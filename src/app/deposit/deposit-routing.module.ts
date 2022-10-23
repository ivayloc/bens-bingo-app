import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositLayoutComponent } from './components/deposit-layout/deposit-layout.component';
import { DepositSelectCardComponent } from './components/deposit-select-card/deposit-select-card.component';
import { DepositSelectNetellerComponent } from './components/deposit-select-neteller/deposit-select-neteller.component';
import { PaymentMethodsGuard } from './guards/payment-methods.guard';

const routes: Routes = [
  {
    path: '',
    component: DepositLayoutComponent,
    canActivate: [PaymentMethodsGuard],
  },

  {
    path: 'card/:id',
    component: DepositSelectCardComponent,
    canActivate: [PaymentMethodsGuard],
  },
  {
    path: 'neteller/:id',
    component: DepositSelectNetellerComponent,
    canActivate: [PaymentMethodsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositRoutingModule {}
