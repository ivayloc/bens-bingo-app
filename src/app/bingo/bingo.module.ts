import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { BingoRoutingModule } from './bingo-routing.module';
import { BingoNewGamesComponent } from './components/bingo-new-games/bingo-new-games.component';
import { BingoShellComponent } from './components/bingo-shell/bingo-shell.component';
import { BingoEffects } from './state/bingo.effects';
import { bingoReducer } from './state/bingo.reducers';

@NgModule({
  declarations: [BingoShellComponent, BingoNewGamesComponent],
  imports: [
    CommonModule,
    BingoRoutingModule,
    SharedModule,
    StoreModule.forFeature('bingo-games', bingoReducer),
    EffectsModule.forFeature([BingoEffects]),
  ],
})
export class BingoModule {}
