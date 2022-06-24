import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BingoShellComponent } from './components/bingo-shell/bingo-shell.component';

const routes: Routes = [
  {
    path: '',
    component: BingoShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BingoRoutingModule {}
