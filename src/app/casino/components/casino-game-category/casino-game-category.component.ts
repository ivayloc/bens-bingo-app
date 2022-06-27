import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SlotsGame } from 'src/app/shared/models/slots-game';
import { CasinoGameCategories } from '../../models/casino-game-categories';
import { CasinoGameCategory } from '../../models/casino-game-category';
import { CasinoService } from '../../services/casino.service';
import {
  getHotSlotsGames,
  getJackpotGames,
  getNewReleasesGames,
  State,
} from '../../state';

@Component({
  selector: 'app-casino-game-category',
  templateUrl: './casino-game-category.component.html',
  styleUrls: ['./casino-game-category.component.scss'],
})
export class CasinoGameCategoryComponent implements OnInit {
  navigationLinks = this.casinoService.navigationLinks;
  gameCategoriesNames = this.casinoService.gameCategoriesNames;
  gameCategory: CasinoGameCategories = CasinoGameCategory['hot-slots'];

  getCategoryAllGames$ = new Observable<SlotsGame[]>();

  constructor(
    private store: Store<State>,
    private casinoService: CasinoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gameCategory = params['gameCategory'];
    });

    if (this.gameCategory === CasinoGameCategory['hot-slots']) {
      this.getCategoryAllGames$ = this.store.select(getHotSlotsGames);
    }
    if (this.gameCategory === CasinoGameCategory['new-releases']) {
      this.getCategoryAllGames$ = this.store.select(getNewReleasesGames);
    }
    if (this.gameCategory === CasinoGameCategory['jackpot-games']) {
      this.getCategoryAllGames$ = this.store.select(getJackpotGames);
    }
  }
}
