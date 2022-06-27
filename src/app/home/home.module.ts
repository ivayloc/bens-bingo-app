import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ComingUpComponent } from './components/coming-up/coming-up.component';
import { HeaderCharacterComponent } from './components/header-character/header-character.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { JackpotWinnersComponent } from './components/jackpot-winners/jackpot-winners.component';
import { NewGamesComponent } from './components/new-games/new-games.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeEffects } from './state/home.effects';
import { homeReducer } from './state/home.reducers';

@NgModule({
  declarations: [
    NewGamesComponent,
    ComingUpComponent,
    HeaderCharacterComponent,
    JackpotWinnersComponent,
    HomeLayoutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature('home-details', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    SharedModule,
  ],
})
export class HomeModule {}
