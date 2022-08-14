import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiLoginGuard } from './core/guards/api-login.guard';
import { RegisterComponent } from './shared/components/register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        canLoad: [ApiLoginGuard],
      },
      {
        path: 'bingo-games',
        loadChildren: () =>
          import('./bingo/bingo.module').then((m) => m.BingoModule),
        canLoad: [ApiLoginGuard],
      },
      {
        path: 'casino-games',
        loadChildren: () =>
          import('./casino/casino.module').then((m) => m.CasinoModule),
        canLoad: [ApiLoginGuard],
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountModule),
        canLoad: [ApiLoginGuard],
      },
      {
        path: 'cashier',
        loadChildren: () =>
          import('./cashier/cashier.module').then((m) => m.CashierModule),
        canLoad: [ApiLoginGuard],
      },
      {
        path: 'help-desk',
        loadChildren: () =>
          import('./help-desk/help-desk.module').then((m) => m.HelpModule),
        canLoad: [ApiLoginGuard],
      },
      {
        path: 'site',
        loadChildren: () =>
          import('./info/site-info.module').then((m) => m.SiteInfoModule),
        canLoad: [ApiLoginGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
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
