import { Component, Input } from '@angular/core';
import { CasinoGameCategories } from 'src/app/casino/models/casino-game-categories';
import { CasinoGameCategory } from 'src/app/casino/models/casino-game-category';
import { SlotsGame } from '../../models/slots-game';

@Component({
  selector: 'app-slots-games',
  templateUrl: './slots-games.component.html',
  styleUrls: ['./slots-games.component.scss'],
})
export class SlotsGamesComponent {
  @Input() games: SlotsGame[] | null = [];
  @Input() showInCarousel = true;
  @Input() category: CasinoGameCategories = CasinoGameCategory['hot-slots'];
  @Input() title = 'Hot Slots';

  casinoGameCategory = CasinoGameCategory;

  public get categoryName(): string {
    return CasinoGameCategory[this.category];
  }
}
