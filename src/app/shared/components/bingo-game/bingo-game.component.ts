import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { BingoGameDetailsDialogComponent } from '../bingo-game-details-dialog/bingo-game-details-dialog.component';

@Component({
  selector: 'app-bingo-game',
  templateUrl: './bingo-game.component.html',
  styleUrls: ['./bingo-game.component.scss'],
})
export class BingoGameComponent {
  @Input() game = {} as BingoGame;

  constructor(private dialog: MatDialog) {}

  showBingoGameDetails(game: BingoGame): void {
    this.dialog.open(BingoGameDetailsDialogComponent, {
      minWidth: '56.25vw',
      maxWidth: 'unset',
      data: game,
    });
  }
}
