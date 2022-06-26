import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotsShellComponent } from './components/slots-shell/slots-shell.component';

const routes: Routes = [
  {
    path: '',
    component: SlotsShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotsRoutingModule {}
