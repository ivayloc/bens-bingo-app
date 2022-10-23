import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositLayoutComponent } from './components/deposit-layout/deposit-layout.component';
import { DepositSelectCardComponent } from './components/deposit-select-card/deposit-select-card.component';

const routes: Routes = [
  { path: '', component: DepositLayoutComponent },

  {
    path: 'card/:id',
    component: DepositSelectCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositRoutingModule {}
