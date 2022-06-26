import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlotsRoutingModule } from './slots-routing.module';
import { SlotsNewGamesComponent } from './components/slots-new-games/slots-new-games.component';
import { SlotsGamesComponent } from './components/slots-games/slots-games.component';
import { SlotsShellComponent } from './components/slots-shell/slots-shell.component';


@NgModule({
  declarations: [
    SlotsNewGamesComponent,
    SlotsGamesComponent,
    SlotsShellComponent
  ],
  imports: [
    CommonModule,
    SlotsRoutingModule
  ]
})
export class SlotsModule { }
