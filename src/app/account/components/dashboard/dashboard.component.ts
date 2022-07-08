import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  top5Games = [{}, {}, {}];
  recentWinners = [
    {
      name: 'Elena 25',
      game: 'Pupp Paws',
      sum: 35,
    },
    {
      name: 'Elena 25',
      game: 'Pupp Paws',
      sum: 35,
    },
    {
      name: 'Elena 25',
      game: 'Pupp Paws',
      sum: 35,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
