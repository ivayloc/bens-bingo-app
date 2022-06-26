import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinoShellComponent } from './components/casino-shell/casino-shell.component';

const routes: Routes = [
  {
    path: '',
    component: CasinoShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasinoRoutingModule {}
