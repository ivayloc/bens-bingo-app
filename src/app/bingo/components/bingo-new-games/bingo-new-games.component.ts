import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-bingo-new-games',
  templateUrl: './bingo-new-games.component.html',
  styleUrls: ['./bingo-new-games.component.scss'],
})
export class BingoNewGamesComponent {
  newGames = [{}, {}, {}] as BingoGame[];
  carouselOptions: OwlOptions = this.gamesService.getNewGamesCarouselOptions();

  constructor(private gamesService: GamesService) {}

  showBingoGameDetails(game: BingoGame) {
    this.gamesService.showBingoGameDetails(game);
  }
}
