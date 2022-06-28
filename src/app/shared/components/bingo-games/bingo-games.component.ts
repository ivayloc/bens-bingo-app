import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { BingoGame } from '../../models/bingo-game';
import { CarouselService } from '../../services/carousel.service';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-bingo-games',
  templateUrl: './bingo-games.component.html',
  styleUrls: ['./bingo-games.component.scss'],
})
export class BingoGamesComponent implements AfterViewInit {
  @ViewChild('parallaxScene') parallaxScene!: ElementRef<HTMLDivElement>;

  @Input() games: BingoGame[] = [];
  @Input() showInCarousel = true;

  carouselOptions = this.carouselService.getGamesCarouselOptions(4);

  constructor(private carouselService: CarouselService) {}

  ngAfterViewInit(): void {
    new Parallax(this.parallaxScene.nativeElement, {
      selector: '.parallax-layer',
    });
  }
}
