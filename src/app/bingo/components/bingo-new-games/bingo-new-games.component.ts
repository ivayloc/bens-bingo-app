import { Component } from '@angular/core';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-bingo-new-games',
  templateUrl: './bingo-new-games.component.html',
  styleUrls: ['./bingo-new-games.component.scss'],
})
export class BingoNewGamesComponent {
  newGames = [1, 2, 3];

  constructor(private gamesService: GamesService) {}

  showBingoGameDetails(game: BingoGame) {
    this.gamesService.showBingoGameDetails(game);
  }
}
