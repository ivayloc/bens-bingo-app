import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BingoGameDetailsDialogComponent } from './components/bingo-game-details-dialog/bingo-game-details-dialog.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { PrimeNgModule } from './modules/angular-material/prime-ng.module';
import { ShrinkFontSizeDirective } from './directives/shrink-font-size.directive';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { LoginComponent } from './components/login/login.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { NewGamesComponent } from './components/new-games/new-games.component';
import { ComingUpComponent } from './components/coming-up/coming-up.component';
import { HeaderCharacterComponent } from './components/header-character/header-character.component';
import { BingoGamesComponent } from './components/bingo-games/bingo-games.component';
import { JackpotWinnersComponent } from './components/jackpot-winners/jackpot-winners.component';
import { SlotsGamesComponent } from './components/slots-games/slots-games.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    BingoGameDetailsDialogComponent,
    ShrinkFontSizeDirective,
    HeaderComponent,
    LanguageSelectorComponent,
    LoginComponent,
    MainNavigationComponent,
    NewGamesComponent,
    ComingUpComponent,
    HeaderCharacterComponent,
    BingoGamesComponent,
    JackpotWinnersComponent,
    SlotsGamesComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AngularMaterialModule,
    PrimeNgModule,
  ],
  exports: [
    AngularMaterialModule,
    PrimeNgModule,
    ShrinkFontSizeDirective,
    HeaderComponent,
    MainNavigationComponent,
    NewGamesComponent,
    ComingUpComponent,
    HeaderCharacterComponent,
    BingoGamesComponent,
    JackpotWinnersComponent,
    SlotsGamesComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
