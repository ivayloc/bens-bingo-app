import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.scss'],
})
export class NewGamesComponent implements OnInit {
  newGames = [1, 2, 3, 4];

  constructor() {}

  ngOnInit(): void {}
}
