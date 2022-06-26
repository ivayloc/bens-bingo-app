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
    path: 'slots-games',
    loadChildren: () =>
      import('./slots/slots.module').then((m) => m.SlotsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
