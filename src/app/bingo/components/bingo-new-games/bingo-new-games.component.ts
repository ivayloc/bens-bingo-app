import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo-new-games',
  templateUrl: './bingo-new-games.component.html',
  styleUrls: ['./bingo-new-games.component.scss'],
})
export class BingoNewGamesComponent implements OnInit {
  newGames = [1, 2, 3];
  constructor() {}

  ngOnInit(): void {}
}
