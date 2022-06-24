import { Component, Input } from '@angular/core';
import { BingoGame } from '../../../home/models/bingo-game';

@Component({
  selector: 'app-bingo-games',
  templateUrl: './bingo-games.component.html',
  styleUrls: ['./bingo-games.component.scss'],
})
export class BingoGamesComponent {
  @Input() games: BingoGame[] = [];
  @Input() showInCarousel = true;
}
