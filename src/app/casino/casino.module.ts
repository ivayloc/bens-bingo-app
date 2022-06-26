import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasinoRoutingModule } from './casino-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CasinoShellComponent } from './components/casino-shell/casino-shell.component';
import { CasinoGamesComponent } from './components/casino-games/casino-games.component';
import { CasinoNewGamesComponent } from './components/casino-new-games/casino-new-games.component';

@NgModule({
  declarations: [
    CasinoNewGamesComponent,
    CasinoGamesComponent,
    CasinoShellComponent,
  ],
  imports: [CommonModule, CasinoRoutingModule, SharedModule],
})
export class CasinoModule {}
