import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ComingUpComponent } from './components/coming-up/coming-up.component';
import { HeaderCharacterComponent } from './components/header-character/header-character.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { JackpotWinnersComponent } from './components/jackpot-winners/jackpot-winners.component';
import { NewGamesComponent } from './components/new-games/new-games.component';
import { SlotsGamesComponent } from './components/slots-games/slots-games.component';
import { HomeRoutingModule } from './home-routing.module';
import { homeReducer } from './state/home.reducers';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './state/home.effects';

@NgModule({
  declarations: [
    NewGamesComponent,
    ComingUpComponent,
    HeaderCharacterComponent,
    JackpotWinnersComponent,
    SlotsGamesComponent,
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
