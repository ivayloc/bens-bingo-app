import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BingoGameDetailsDialogComponent } from '../../../shared/components/bingo-game-details-dialog/bingo-game-details-dialog.component';

@Component({
  selector: 'app-bingo-games',
  templateUrl: './bingo-games.component.html',
  styleUrls: ['./bingo-games.component.scss'],
})
export class BingoGamesComponent implements OnInit {
  @Input() games: any[] = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  showBingoGameDetails(game: any): void {
    this.dialog.open(BingoGameDetailsDialogComponent, {
      minWidth: '56.25vw',
      maxWidth: 'unset',
      data: game,
    });
  }
}
