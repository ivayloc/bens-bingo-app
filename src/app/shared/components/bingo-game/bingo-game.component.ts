import { Component, Input } from '@angular/core';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-bingo-game',
  templateUrl: './bingo-game.component.html',
  styleUrls: ['./bingo-game.component.scss'],
})
export class BingoGameComponent {
  @Input() game = {} as BingoGame;

  constructor(private gamesService: GamesService) {}

  showBingoGameDetails(game: BingoGame) {
    this.gamesService.showBingoGameDetails(game);
  }
}
