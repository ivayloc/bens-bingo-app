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

@NgModule({
  declarations: [
    BingoGameDetailsDialogComponent,
    ShrinkFontSizeDirective,
    HeaderComponent,
    LanguageSelectorComponent,
    LoginComponent,
    MainNavigationComponent,
    FooterComponent,
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
  ],
})
export class SharedModule {}
