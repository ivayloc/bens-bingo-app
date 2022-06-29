import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CasinoGameCategories } from 'src/app/casino/models/casino-game-categories';
import { CasinoGameCategory } from 'src/app/casino/models/casino-game-category';
import { SlotsGame } from '../../models/slots-game';
import { CarouselService } from '../../services/carousel.service';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-slots-games',
  templateUrl: './slots-games.component.html',
  styleUrls: ['./slots-games.component.scss'],
})
export class SlotsGamesComponent implements AfterViewInit {
  @ViewChild('parallaxScene') parallaxScene!: ElementRef<HTMLDivElement>;
  @Input() games: SlotsGame[] | null = [];
  @Input() showInCarousel = true;
  @Input() category: CasinoGameCategories = CasinoGameCategory['hot-slots'];
  @Input() title = '';

  casinoGameCategory = CasinoGameCategory;
  carouselOptions = this.carouselService.getGamesCarouselOptions(5);

  public get categoryName(): string {
    return CasinoGameCategory[this.category];
  }
  constructor(private carouselService: CarouselService) {}

  ngAfterViewInit(): void {
    if (this.parallaxScene) {
      new Parallax(this.parallaxScene.nativeElement, {
        selector: '.parallax-layer',
      });
    }
  }
}
