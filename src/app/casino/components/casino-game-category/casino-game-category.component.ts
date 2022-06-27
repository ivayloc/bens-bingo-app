import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasinoService } from '../../services/casino.service';

@Component({
  selector: 'app-casino-game-category',
  templateUrl: './casino-game-category.component.html',
  styleUrls: ['./casino-game-category.component.scss'],
})
export class CasinoGameCategoryComponent implements OnInit {
  navigationLinks = this.casinoService.navigationLinks;
  gameCategory = '';
  constructor(
    private casinoService: CasinoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gameCategory = params['gameCategory'];
    });
  }
}
