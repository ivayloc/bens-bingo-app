import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from '../../models/game';

@Component({
  selector: 'app-bingo-game-details-dialog',
  templateUrl: './bingo-game-details-dialog.component.html',
  styleUrls: ['./bingo-game-details-dialog.component.scss'],
})
export class BingoGameDetailsDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<BingoGameDetailsDialogComponent, Game>,
    @Inject(MAT_DIALOG_DATA) public game: Game
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
