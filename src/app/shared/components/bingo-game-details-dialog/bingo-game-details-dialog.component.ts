import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bingo-game-details-dialog',
  templateUrl: './bingo-game-details-dialog.component.html',
  styleUrls: ['./bingo-game-details-dialog.component.scss'],
})
export class BingoGameDetailsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BingoGameDetailsDialogComponent>
  ) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }
}
