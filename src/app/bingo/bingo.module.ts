import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BingoRoutingModule } from './bingo-routing.module';
import { BingoShellComponent } from './components/bingo-shell/bingo-shell.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BingoEffects } from './state/bingo.effects';
import { bingoReducer } from './state/bingo.reducers';

@NgModule({
  declarations: [BingoShellComponent],
  imports: [
    CommonModule,
    BingoRoutingModule,
    SharedModule,
    StoreModule.forFeature('bingo-games', bingoReducer),
    EffectsModule.forFeature([BingoEffects]),
  ],
})
export class BingoModule {}
