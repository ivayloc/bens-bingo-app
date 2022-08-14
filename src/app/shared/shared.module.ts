import { CommonModule } from '@angular/common';
// import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlotsGamesComponent } from '../shared/components/slots-games/slots-games.component';
import { BingoGameDetailsDialogComponent } from './components/bingo-game-details-dialog/bingo-game-details-dialog.component';
import { BingoGameComponent } from './components/bingo-game/bingo-game.component';
import { BingoGamesComponent } from './components/bingo-games/bingo-games.component';
import { ChatModeratorsComponent } from './components/chat-moderators/chat-moderators.component';
import { ContentBoxComponent } from './components/content-box/content-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { RecentWinnersComponent } from './components/recent-winners/recent-winners.component';
import { RegisterComponent } from './components/register/register.component';
import { SlotsGameComponent } from './components/slots-game/slots-game.component';
import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';
import { ShrinkFontSizeDirective } from './directives/shrink-font-size.directive';
import { AngularMaterialModule } from './modules/angular-material.module';
import { PrimeNgModule } from './modules/prime-ng.module';
import { LoaderService } from './services/loader.service';
import { TextContentLayoutComponent } from './text-content-layout/text-content-layout.component';

@NgModule({
  declarations: [
    BingoGameDetailsDialogComponent,
    ShrinkFontSizeDirective,
    HeaderComponent,
    LanguageSelectorComponent,
    // LoginComponent,
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
    ChatModeratorsComponent,
    LoadingSpinnerComponent,
    RegisterComponent,
    LoginDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    PrimeNgModule,
    CarouselModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
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
    ChatModeratorsComponent,
    LoadingSpinnerComponent,
    TranslocoModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useExisting: LoaderService, multi: true },
  ],
})
export class SharedModule {}
