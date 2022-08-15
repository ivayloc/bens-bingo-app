import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import Parallax from 'parallax-js';
import { CasinoGameCategories } from 'src/app/casino/models/casino-game-categories';
import { CasinoGameCategory } from 'src/app/casino/models/casino-game-category';
import { Game } from '../../models/game';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-slots-games',
  templateUrl: './slots-games.component.html',
  styleUrls: ['./slots-games.component.scss'],
})
export class SlotsGamesComponent implements AfterViewInit {
  @ViewChild('parallaxScene') parallaxScene!: ElementRef<HTMLDivElement>;
  @Input() games: Game[] | null = [];
  @Input() showInCarousel = true;
  @Input() category: CasinoGameCategories = CasinoGameCategory['hot-slots'];
  @Input() headerText = '';
  @Input() paginatorLength = 0;
  @Input() paginatorPageSize = 0;
  @Input() paginatorPageIndex = 0;
  @Output() page = new EventEmitter<PageEvent>();

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
  pageChanged(page: PageEvent) {
    this.page.emit(page);
  }
}
