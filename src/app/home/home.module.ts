import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComingUpComponent } from './components/coming-up/coming-up.component';
import { HeaderCharacterComponent } from './components/header-character/header-character.component';
import { JackpotWinnersComponent } from './components/jackpot-winners/jackpot-winners.component';
import { NewGamesComponent } from './components/new-games/new-games.component';
import { SlotsGamesComponent } from './components/slots-games/slots-games.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NewGamesComponent,
    ComingUpComponent,
    HeaderCharacterComponent,
    JackpotWinnersComponent,
    SlotsGamesComponent,
    HomeLayoutComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
