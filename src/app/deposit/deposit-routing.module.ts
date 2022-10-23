import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositLayoutComponent } from './components/deposit-layout/deposit-layout.component';
import { DepositSelectedMethodComponent } from './components/deposit-selected-method/deposit-selected-method.component';

const routes: Routes = [
  { path: '', component: DepositLayoutComponent },

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
