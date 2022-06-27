import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { CasinoRoutingModule } from './casino-routing.module';
import { CasinoGamesComponent } from './components/casino-games/casino-games.component';
import { CasinoNewGamesComponent } from './components/casino-new-games/casino-new-games.component';
import { CasinoShellComponent } from './components/casino-shell/casino-shell.component';
import { CasinoEffects } from './state/casino.effects';
import { casinoReducer } from './state/casino.reducers';
import { CasinoGameCategoryComponent } from './components/casino-game-category/casino-game-category.component';
import { CasinoGameCategoryHeaderComponent } from './components/casino-game-category-header/casino-game-category-header.component';

@NgModule({
  declarations: [
    CasinoNewGamesComponent,
    CasinoGamesComponent,
    CasinoShellComponent,
    CasinoGameCategoryComponent,
    CasinoGameCategoryHeaderComponent,
  ],
  imports: [
    CommonModule,
    CasinoRoutingModule,
    SharedModule,
    StoreModule.forFeature('casino-games', casinoReducer),
    EffectsModule.forFeature([CasinoEffects]),
  ],
})
export class CasinoModule {}
