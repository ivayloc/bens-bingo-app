import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'bingo-games',
    loadChildren: () =>
      import('./bingo/bingo.module').then((m) => m.BingoModule),
  },
  {
    path: 'casino-games',
    loadChildren: () =>
      import('./casino/casino.module').then((m) => m.CasinoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
