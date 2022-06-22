import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BingoGameDetailsDialogComponent } from '../../../shared/components/bingo-game-details-dialog/bingo-game-details-dialog.component';
import { BingoGame } from '../../models/bingo-game';

@Component({
  selector: 'app-bingo-games',
  templateUrl: './bingo-games.component.html',
  styleUrls: ['./bingo-games.component.scss'],
})
export class BingoGamesComponent {
  @Input() games: BingoGame[] = [];

  constructor(private dialog: MatDialog) {}

  showBingoGameDetails(game: BingoGame): void {
    this.dialog.open(BingoGameDetailsDialogComponent, {
      minWidth: '56.25vw',
      maxWidth: 'unset',
      data: game,
    });
  }
}
