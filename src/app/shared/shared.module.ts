import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BingoGameDetailsDialogComponent } from './bingo-game-details-dialog/bingo-game-details-dialog.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

@NgModule({
  declarations: [BingoGameDetailsDialogComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [AngularMaterialModule],
})
export class SharedModule {}
