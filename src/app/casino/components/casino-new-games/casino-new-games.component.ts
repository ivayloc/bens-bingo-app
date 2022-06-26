import { Component, Input } from '@angular/core';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { SlotsGame } from 'src/app/shared/models/slots-game';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-casino-new-games',
  templateUrl: './casino-new-games.component.html',
  styleUrls: ['./casino-new-games.component.scss'],
})
export class CasinoNewGamesComponent {
  @Input() newGames = [] as SlotsGame[];

  constructor(private gamesService: GamesService) {}

  showBingoGameDetails(game: BingoGame) {
    this.gamesService.showBingoGameDetails(game);
  }
}
