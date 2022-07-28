import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BingoGameDetailsDialogComponent } from '../components/bingo-game-details-dialog/bingo-game-details-dialog.component';
import { BingoGame } from '../models/bingo-game';
import { SlotsGame } from '../models/slots-game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private dialog: MatDialog) {}

  showBingoGameDetails(game: BingoGame | SlotsGame): void {
    this.dialog.open(BingoGameDetailsDialogComponent, {
      minWidth: '',
      maxWidth: 'unset',
      panelClass: 'site-details-dialog',
      data: game,
    });
  }
}
