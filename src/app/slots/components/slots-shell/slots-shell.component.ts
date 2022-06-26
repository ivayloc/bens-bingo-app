import { Component, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/shared/models/navigation-item';

@Component({
  selector: 'app-slots-shell',
  templateUrl: './slots-shell.component.html',
  styleUrls: ['./slots-shell.component.scss'],
})
export class SlotsShellComponent implements OnInit {
  navigationLinks: NavigationItem[] = [
    { url: '/hot-slots', title: 'Hot Slots' },
    { url: '/new-releases', title: 'New Releases' },
    { url: '/jackpot-games', title: 'Jackpot Games' },
    { url: '/all-slots', title: 'All Slots' },
    { url: '/table-games', title: 'Table Games' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
