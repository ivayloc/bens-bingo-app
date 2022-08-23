import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {} from './core/guards/api-auth.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './shared/components/register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        canLoad: [],
      },
      {
        path: 'bingo-games',
        loadChildren: () =>
          import('./bingo/bingo.module').then((m) => m.BingoModule),
        canLoad: [],
      },
      {
        path: 'casino-games',
        loadChildren: () =>
          import('./casino/casino.module').then((m) => m.CasinoModule),
        canLoad: [],
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
      },
      {
        path: 'cashier',
        loadChildren: () =>
          import('./cashier/cashier.module').then((m) => m.CashierModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
      },
      {
        path: 'help-desk',
        loadChildren: () =>
          import('./help-desk/help-desk.module').then((m) => m.HelpModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
      },
      {
        path: 'site',
        loadChildren: () =>
          import('./info/site-info.module').then((m) => m.SiteInfoModule),
        canLoad: [],
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
