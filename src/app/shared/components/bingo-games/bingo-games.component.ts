import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BingoGame } from '../../models/bingo-game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-bingo-games',
  templateUrl: './bingo-games.component.html',
  styleUrls: ['./bingo-games.component.scss'],
})
export class BingoGamesComponent {
  @Input() games: BingoGame[] = [];
  @Input() showInCarousel = true;

  carouselOptions = this.gamesService.getGamesCarouselOptions(4);

  constructor(private gamesService: GamesService) {}
}
