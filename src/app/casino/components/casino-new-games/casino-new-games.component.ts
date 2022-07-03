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

@Component({
  selector: 'app-casino-new-games',
  templateUrl: './casino-new-games.component.html',
  styleUrls: ['./casino-new-games.component.scss'],
})
export class CasinoNewGamesComponent implements AfterViewInit {
  @ViewChild('parallaxScene') parallaxScene!: ElementRef<HTMLDivElement>;
  @Input() newGames: SlotsGame[] | null = [];
  carouselOptions: OwlOptions = this.carouselService.newGamesCarouselOptions;

  constructor(private carouselService: CarouselService) {}

  ngAfterViewInit(): void {
    new Parallax(this.parallaxScene.nativeElement, {
      selector: '.parallax-layer',
    });
  }
}
