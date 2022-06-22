import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bingo-game-details-dialog',
  templateUrl: './bingo-game-details-dialog.component.html',
  styleUrls: ['./bingo-game-details-dialog.component.scss'],
})
export class BingoGameDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BingoGameDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public game: any
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
