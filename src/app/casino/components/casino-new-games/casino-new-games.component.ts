import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  carouselOptions: OwlOptions = this.gamesService.getNewGamesCarouselOptions();

  constructor(private gamesService: GamesService) {}

  showBingoGameDetails(game: SlotsGame) {
    this.gamesService.showBingoGameDetails(game);
  }
}
