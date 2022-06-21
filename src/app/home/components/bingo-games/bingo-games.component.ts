import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BingoGameDetailsDialogComponent } from '../../../shared/components/bingo-game-details-dialog/bingo-game-details-dialog.component';

@Component({
  selector: 'app-bingo-games',
  templateUrl: './bingo-games.component.html',
  styleUrls: ['./bingo-games.component.scss'],
})
export class BingoGamesComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  games = [1, 2, 3, 4, 1, 2, 3, 4];

  ngOnInit(): void {
    // this.showBingoGameDetails();
  }

  showBingoGameDetails() {
    const dialogRef = this.dialog.open(BingoGameDetailsDialogComponent, {
      width: '56.25vw',
      // data: {name: this.name, animal: this.animal},
    });
  }
}
