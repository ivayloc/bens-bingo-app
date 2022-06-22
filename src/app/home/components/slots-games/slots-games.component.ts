import { Component, Input, OnInit } from '@angular/core';
import { SlotsGame } from '../../models/slots-game';

@Component({
  selector: 'app-slots-games',
  templateUrl: './slots-games.component.html',
  styleUrls: ['./slots-games.component.scss'],
})
export class SlotsGamesComponent implements OnInit {
  @Input() games: SlotsGame[] = [];

  constructor() {}

  ngOnInit(): void {}
}
