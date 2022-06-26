import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BingoGameDetailsDialogComponent } from '../components/bingo-game-details-dialog/bingo-game-details-dialog.component';
import { BingoGame } from '../models/bingo-game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private dialog: MatDialog) {}

  showBingoGameDetails(game: BingoGame): void {
    this.dialog.open(BingoGameDetailsDialogComponent, {
      minWidth: '56.25vw',
      maxWidth: 'unset',
      data: game,
    });
  }
}
