import { Component, Input, OnInit } from '@angular/core';
import { SlotsGame } from '../../models/slots-game';

@Component({
  selector: 'app-slots-game',
  templateUrl: './slots-game.component.html',
  styleUrls: ['./slots-game.component.scss'],
})
export class SlotsGameComponent implements OnInit {
  @Input() game = {} as SlotsGame;
  constructor() {}

  ngOnInit(): void {}
}
