import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BingoGameDetailsDialogComponent } from './components/bingo-game-details-dialog/bingo-game-details-dialog.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { PrimeNgModule } from './modules/angular-material/prime-ng.module';
import { ShrinkFontSizeDirective } from './directives/shrink-font-size.directive';

@NgModule({
  declarations: [BingoGameDetailsDialogComponent, ShrinkFontSizeDirective],
  imports: [CommonModule, AngularMaterialModule],
  exports: [AngularMaterialModule, PrimeNgModule, ShrinkFontSizeDirective],
})
export class SharedModule {}
