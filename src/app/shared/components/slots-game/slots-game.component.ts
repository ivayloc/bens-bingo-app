import { Component, Input } from '@angular/core';
import { SlotsGame } from '../../models/slots-game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-slots-game',
  templateUrl: './slots-game.component.html',
  styleUrls: ['./slots-game.component.scss'],
})
export class SlotsGameComponent {
  @Input() game = {} as SlotsGame;

  constructor(private gamesService: GamesService) {}

  showBingoGameDetails(game: SlotsGame) {
    this.gamesService.showBingoGameDetails(game);
  }
}
