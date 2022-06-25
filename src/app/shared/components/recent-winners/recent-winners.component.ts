import { Component, Input, OnInit } from '@angular/core';
import { RecentWinners } from 'src/app/home/models/recent-winners';

@Component({
  selector: 'app-recent-winners',
  templateUrl: './recent-winners.component.html',
  styleUrls: ['./recent-winners.component.scss'],
})
export class RecentWinnersComponent implements OnInit {
  @Input() recentWinners: RecentWinners[] = [];

  constructor() {}

  ngOnInit(): void {}
}
