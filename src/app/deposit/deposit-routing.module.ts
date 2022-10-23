import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositLayoutComponent } from './components/deposit-layout/deposit-layout.component';
import { DepositSelectCardComponent } from './components/deposit-select-card/deposit-select-card.component';
import { DepositSelectNetellerComponent } from './components/deposit-select-neteller/deposit-select-neteller.component';

const routes: Routes = [
  { path: '', component: DepositLayoutComponent },

  {
    path: 'card/:id',
    component: DepositSelectCardComponent,
  },
  {
    path: 'neteller/:id',
    component: DepositSelectNetellerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositRoutingModule {}
