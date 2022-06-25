import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BingoGame } from 'src/app/shared/models/bingo-game';

@Component({
  selector: 'app-bingo-game-details-dialog',
  templateUrl: './bingo-game-details-dialog.component.html',
  styleUrls: ['./bingo-game-details-dialog.component.scss'],
})
export class BingoGameDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BingoGameDetailsDialogComponent, BingoGame>,
    @Inject(MAT_DIALOG_DATA) public game: BingoGame
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
