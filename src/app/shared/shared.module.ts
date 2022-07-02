import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlotsGamesComponent } from '../shared/components/slots-games/slots-games.component';
import { BingoGameDetailsDialogComponent } from './components/bingo-game-details-dialog/bingo-game-details-dialog.component';
import { BingoGameComponent } from './components/bingo-game/bingo-game.component';
import { BingoGamesComponent } from './components/bingo-games/bingo-games.component';
import { ContentBoxComponent } from './components/content-box/content-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { LoginComponent } from './components/login/login.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { RecentWinnersComponent } from './components/recent-winners/recent-winners.component';
import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';
import { ShrinkFontSizeDirective } from './directives/shrink-font-size.directive';
import { AngularMaterialModule } from './modules/angular-material.module';
import { PrimeNgModule } from './modules/prime-ng.module';
import { SlotsGameComponent } from './components/slots-game/slots-game.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TextContentLayoutComponent } from './text-content-layout/text-content-layout.component';

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
    RecentWinnersComponent,
    SlotsGamesComponent,
    SlotsGameComponent,
    TextContentLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    AngularMaterialModule,
    PrimeNgModule,
    CarouselModule,
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
    RecentWinnersComponent,
    SlotsGamesComponent,
    CarouselModule,
    TextContentLayoutComponent,
  ],
})
export class SharedModule {}
