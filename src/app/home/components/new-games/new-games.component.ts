import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.scss'],
})
export class NewGamesComponent {
  newGames = [1, 2, 3, 4];
  carouselOptions = this.gamesService.getNewGamesCarouselOptions();

  constructor(private gamesService: GamesService) {}
}
