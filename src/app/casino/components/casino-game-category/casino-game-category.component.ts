import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from 'src/app/shared/models/game';
import { SlotsGame } from 'src/app/shared/models/slots-game';
import { CasinoService } from 'src/app/shared/services/casino.service';
import { CasinoGameCategories } from '../../models/casino-game-categories';
import { CasinoGameCategory } from '../../models/casino-game-category';
import {
  getAllGames,
  getHotSlotsGames,
  getJackpotGames,
  getNewReleasesGames,
  State,
} from '../../state';
import { CasinoPageActions } from '../../state/actions';

@Component({
  selector: 'app-casino-game-category',
  templateUrl: './casino-game-category.component.html',
  styleUrls: ['./casino-game-category.component.scss'],
})
export class CasinoGameCategoryComponent implements OnInit {
  navigationLinks = this.casinoService.navigationLinks;
  gameCategoriesNames = this.casinoService.gameCategoriesNames;
  gameCategories = CasinoGameCategory;
  gameCategory: CasinoGameCategories = CasinoGameCategory['hot-slots'];

  getCategoryGames$ = new Observable<Game[]>();
  getAllGames$ = new Observable<Game[]>();

  constructor(
    private store: Store,
    private casinoService: CasinoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CasinoPageActions.loadCasinoDetails());

    this.getAllGames$ = this.store.select(getAllGames);

    this.route.params.subscribe((params) => {
      this.gameCategory = params['gameCategory'];

      if (this.gameCategory === CasinoGameCategory['hot-slots']) {
        this.getCategoryGames$ = this.store.select(getHotSlotsGames);
      }
      if (this.gameCategory === CasinoGameCategory['new-releases']) {
        this.getCategoryGames$ = this.store.select(getNewReleasesGames);
      }
      if (this.gameCategory === CasinoGameCategory['jackpot-games']) {
        this.getCategoryGames$ = this.store.select(getJackpotGames);
      }
    });
  }
}
