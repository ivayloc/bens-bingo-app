import { Component, Input } from '@angular/core';
import { Game } from '../../models/game';
import { SlotsGame } from '../../models/slots-game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-slots-game',
  templateUrl: './slots-game.component.html',
  styleUrls: ['./slots-game.component.scss'],
})
export class SlotsGameComponent {
  @Input() game = {} as Game;

  constructor(private gamesService: GamesService) {}

  showBingoGameDetails(game: SlotsGame) {
    this.gamesService.showBingoGameDetails(game);
  }
}
