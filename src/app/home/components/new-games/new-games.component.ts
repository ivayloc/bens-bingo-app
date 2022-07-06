import { Component, Input } from '@angular/core';
import { Game } from 'src/app/shared/models/game';
import { SlotsGame } from 'src/app/shared/models/slots-game';
import { CarouselService } from 'src/app/shared/services/carousel.service';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.scss'],
})
export class NewGamesComponent {
  @Input() games: Game[] | null = [];
  carouselOptions = this.carouselService.newGamesCarouselOptions;

  constructor(private carouselService: CarouselService) {}
}
