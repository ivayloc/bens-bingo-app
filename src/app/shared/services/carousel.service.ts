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
    navText: ['', ''],
    pullDrag: false,
    touchDrag: false,
  };

  private readonly gamesCarouselOptions: OwlOptions = {
    ...this.defaultCarouselOptions,
    autoplayTimeout: 2000,
    dots: false,
  };

  readonly newGamesCarouselOptions: OwlOptions = {
    ...this.defaultCarouselOptions,
    autoplayTimeout: 3000,
    dots: true,
    dotsEach: true,
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
