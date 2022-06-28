import { Injectable } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private readonly defaultCarouselOptions: OwlOptions = {
    autoplay: true,
    autoWidth: true,
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
    dots: false,
  };

  private readonly newGamesCarouselOptions: OwlOptions = {
    ...this.defaultCarouselOptions,
    dots: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

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
