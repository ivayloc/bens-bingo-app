import { Component, Input } from '@angular/core';
import { BingoGame } from '../../models/bingo-game';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-bingo-games',
  templateUrl: './bingo-games.component.html',
  styleUrls: ['./bingo-games.component.scss'],
})
export class BingoGamesComponent {
  @Input() games: BingoGame[] = [];
  @Input() showInCarousel = true;

  carouselOptions = this.carouselService.getGamesCarouselOptions(4);

  constructor(private carouselService: CarouselService) {}
}
