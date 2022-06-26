import { Component, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/shared/models/navigation-item';
import { SlotsGame } from 'src/app/shared/models/slots-game';

@Component({
  selector: 'app-casino-shell',
  templateUrl: './casino-shell.component.html',
  styleUrls: ['./casino-shell.component.scss'],
})
export class CasinoShellComponent implements OnInit {
  navigationLinks: NavigationItem[] = [
    { url: '/hot-casino', title: 'Hot Casino' },
    { url: '/new-releases', title: 'New Releases' },
    { url: '/jackpot-games', title: 'Jackpot Games' },
    { url: '/all-casino', title: 'All Casino' },
    { url: '/table-games', title: 'Table Games' },
  ];
  newGames = [{}, {}, {}] as SlotsGame[];

  constructor() {}

  ngOnInit(): void {}
}
