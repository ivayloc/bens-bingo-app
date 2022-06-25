import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BingoGameDetailsDialogComponent } from './components/bingo-game-details-dialog/bingo-game-details-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { LoginComponent } from './components/login/login.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { ShrinkFontSizeDirective } from './directives/shrink-font-size.directive';
import { AngularMaterialModule } from './modules/angular-material.module';
import { PrimeNgModule } from './modules/prime-ng.module';
import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';
import { BingoGameComponent } from './components/bingo-game/bingo-game.component';
import { BingoGamesComponent } from './components/bingo-games/bingo-games.component';
import { ContentBoxComponent } from './components/content-box/content-box.component';

@NgModule({
  declarations: [
    BingoGameDetailsDialogComponent,
    ShrinkFontSizeDirective,
    HeaderComponent,
    LanguageSelectorComponent,
    LoginComponent,
    MainNavigationComponent,
    FooterComponent,
    SubNavigationComponent,
    BingoGamesComponent,
    BingoGameComponent,
    ContentBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
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
    FooterComponent,
    SubNavigationComponent,
    BingoGamesComponent,
    BingoGameComponent,
    ContentBoxComponent,
  ],
})
export class SharedModule {}
