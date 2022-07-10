import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { TermsAndConditionsGuard } from './guards/terms-and-conditions.guard';

const routes: Routes = [
  {
    path: 'terms',
    component: TermsAndConditionsComponent,
    canActivate: [TermsAndConditionsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
