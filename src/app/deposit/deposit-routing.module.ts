import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositSelectedMethodComponent } from './components/deposit-selected-method/deposit-selected-method.component';
import { DepositComponent } from './components/deposit/deposit.component';

const routes: Routes = [
  { path: '', component: DepositComponent },

  {
    path: ':id',
    component: DepositSelectedMethodComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositRoutingModule {}
