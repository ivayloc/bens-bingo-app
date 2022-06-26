import { Component, Input, OnInit } from '@angular/core';
import { Jackpot } from '../../models/jackpots';
import { RecentWinners } from '../../../shared/models/recent-winners';

@Component({
  selector: 'app-jackpot-winners',
  templateUrl: './jackpot-winners.component.html',
  styleUrls: ['./jackpot-winners.component.scss'],
})
export class JackpotWinnersComponent implements OnInit {
  @Input() jackpots: Jackpot[] = [];
  @Input() recentWinners: RecentWinners[] = [];
  constructor() {}

  ngOnInit(): void {}
}
