import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BingoGameDetailsDialogComponent } from '../components/bingo-game-details-dialog/bingo-game-details-dialog.component';
import { BingoGame } from '../models/bingo-game';
import { SlotsGame } from '../models/slots-game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private readonly defaultCarouselOptions: OwlOptions = {
    // autoplay: true,
    loop: true,
    mouseDrag: false,
    nav: true,
    navSpeed: 700,
    navText: ['previous', 'next'],
    pullDrag: false,
    touchDrag: false,
  };

  private readonly gamesCarouselOptions: OwlOptions = {
    ...this.defaultCarouselOptions,
    animateIn: 'animate__slideOutRight',
    animateOut: 'animate__slideInLeft',
  };

  private readonly newGamesCarouselOptions: OwlOptions = {
    ...this.defaultCarouselOptions,
    dots: true,
    animateIn: 'animate__fadeIn',
    animateOut: 'animate__fadeOut',
    autoWidth: true,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  constructor(private dialog: MatDialog) {}

  showBingoGameDetails(game: BingoGame | SlotsGame): void {
    this.dialog.open(BingoGameDetailsDialogComponent, {
      minWidth: '56.25vw',
      maxWidth: 'unset',
      panelClass: 'game-details-dialog',
      data: game,
    });
  }

  getGamesCarouselOptions(itemsCount: number): OwlOptions {
    return {
      ...this.gamesCarouselOptions,
      items: itemsCount,
      responsive: {
        0: {
          items: itemsCount,
        },
      },
    };
  }

  getNewGamesCarouselOptions(): OwlOptions {
    return {
      ...this.newGamesCarouselOptions,
    };
  }
}
