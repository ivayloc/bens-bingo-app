import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextContentLayoutComponent } from './shared/text-content-layout/text-content-layout.component';

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
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.CustomerPortalModule),
  },
  {
    path: 'cashier',
    loadChildren: () =>
      import('./cashier/cashier.module').then((m) => m.CashierModule),
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then((m) => m.HelpModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
