import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Parallax from 'parallax-js';
import { SlotsGame } from 'src/app/shared/models/slots-game';
import { CarouselService } from 'src/app/shared/services/carousel.service';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-casino-new-games',
  templateUrl: './casino-new-games.component.html',
  styleUrls: ['./casino-new-games.component.scss'],
})
export class CasinoNewGamesComponent implements AfterViewInit {
  @ViewChild('parallaxScene') parallaxScene!: ElementRef<HTMLDivElement>;
  @Input() newGames = [] as SlotsGame[];
  carouselOptions: OwlOptions = this.carouselService.newGamesCarouselOptions;

  constructor(
    private gamesService: GamesService,
    private carouselService: CarouselService
  ) {}

  ngAfterViewInit(): void {
    new Parallax(this.parallaxScene.nativeElement, {
      selector: '.parallax-layer',
    });
  }

  showBingoGameDetails(game: SlotsGame) {
    this.gamesService.showBingoGameDetails(game);
  }
}
