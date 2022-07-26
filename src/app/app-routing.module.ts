import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './shared/components/register/register.component';

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
      import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'cashier',
    loadChildren: () =>
      import('./cashier/cashier.module').then((m) => m.CashierModule),
  },
  {
    path: 'help-desk',
    loadChildren: () =>
      import('./help-desk/help-desk.module').then((m) => m.HelpModule),
  },
  {
    path: 'site',
    loadChildren: () =>
      import('./info/info.module').then((m) => m.SiteInfoModule),
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
