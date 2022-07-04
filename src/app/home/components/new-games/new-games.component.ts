import { Component, Input } from '@angular/core';
import { SlotsGame } from 'src/app/shared/models/slots-game';
import { CarouselService } from 'src/app/shared/services/carousel.service';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.scss'],
})
export class NewGamesComponent {
  @Input() games: SlotsGame[] | null = [];
  carouselOptions = this.carouselService.newGamesCarouselOptions;

  constructor(private carouselService: CarouselService) {}
}
