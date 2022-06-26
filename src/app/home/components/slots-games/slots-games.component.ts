import { Component, Input } from '@angular/core';
import { SlotsGame } from '../../../shared/models/slots-game';

@Component({
  selector: 'app-slots-games',
  templateUrl: './slots-games.component.html',
  styleUrls: ['./slots-games.component.scss'],
})
export class SlotsGamesComponent {
  @Input() games: SlotsGame[] = [];
}
