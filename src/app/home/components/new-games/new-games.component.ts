import { Component } from '@angular/core';
import { CarouselService } from 'src/app/shared/services/carousel.service';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.scss'],
})
export class NewGamesComponent {
  newGames = [1, 2, 3, 4];
  carouselOptions = this.carouselService.getNewGamesCarouselOptions();

  constructor(private carouselService: CarouselService) {}
}
