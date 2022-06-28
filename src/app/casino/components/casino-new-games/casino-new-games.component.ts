import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SlotsGame } from 'src/app/shared/models/slots-game';
import { CarouselService } from 'src/app/shared/services/carousel.service';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-casino-new-games',
  templateUrl: './casino-new-games.component.html',
  styleUrls: ['./casino-new-games.component.scss'],
})
export class CasinoNewGamesComponent {
  @Input() newGames = [] as SlotsGame[];
  carouselOptions: OwlOptions =
    this.carouselService.getNewGamesCarouselOptions();

  constructor(
    private gamesService: GamesService,
    private carouselService: CarouselService
  ) {}

  showBingoGameDetails(game: SlotsGame) {
    this.gamesService.showBingoGameDetails(game);
  }
}
