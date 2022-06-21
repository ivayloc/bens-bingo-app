import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slots-games',
  templateUrl: './slots-games.component.html',
  styleUrls: ['./slots-games.component.scss'],
})
export class SlotsGamesComponent implements OnInit {
  slots = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}
}
