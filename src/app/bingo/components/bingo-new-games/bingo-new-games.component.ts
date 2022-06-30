import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Parallax from 'parallax-js';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { CarouselService } from 'src/app/shared/services/carousel.service';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-bingo-new-games',
  templateUrl: './bingo-new-games.component.html',
  styleUrls: ['./bingo-new-games.component.scss'],
})
export class BingoNewGamesComponent implements AfterViewInit {
  @ViewChild('parallaxScene') parallaxScene!: ElementRef<HTMLDivElement>;
  @Input() games: BingoGame[] | null = [];
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

  showBingoGameDetails(game: BingoGame) {
    this.gamesService.showBingoGameDetails(game);
  }
}
