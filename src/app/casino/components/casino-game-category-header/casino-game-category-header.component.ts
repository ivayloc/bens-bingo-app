import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-casino-game-category-header',
  templateUrl: './casino-game-category-header.component.html',
  styleUrls: ['./casino-game-category-header.component.scss'],
})
export class CasinoGameCategoryHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() gameCategory = '';
  constructor() {}

  ngOnInit(): void {}
}
