import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinoGameCategoryComponent } from './components/casino-game-category/casino-game-category.component';
import { CasinoShellComponent } from './components/casino-shell/casino-shell.component';

const routes: Routes = [
  {
    path: '',
    component: CasinoShellComponent,
  },
  {
    path: ':gameCategory',
    component: CasinoGameCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasinoRoutingModule {}
