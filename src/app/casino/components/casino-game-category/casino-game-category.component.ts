import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from 'src/app/shared/models/game';
import { GamesData } from 'src/app/shared/models/games-data';
import { CasinoService } from 'src/app/shared/services/casino.service';
import { CasinoGameCategories } from '../../models/casino-game-categories';
import { CasinoGameCategory } from '../../models/casino-game-category';
import { getAllGames, selectSlotsGamesPage } from '../../state';
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

  getCategoryGames$ = new Observable<GamesData>();
  getAllGames$ = new Observable<Game[]>();

  constructor(
    private store: Store,
    private casinoService: CasinoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.store.dispatch(CasinoPageActions.loadCasinoDetails());

    this.getAllGames$ = this.store.select(getAllGames);

    this.route.params.subscribe((params) => {
      this.gameCategory = params['gameCategory'];

      // if (this.gameCategory === CasinoGameCategory['hot-slots']) {
      //   this.store.dispatch(CasinoPageActions.loadSlotsGamesPage({ page: 1 }));
      //   this.getCategoryGames$ = this.store.select(selectSlotsGamesPage);
      // }
      if (this.gameCategory === CasinoGameCategory['new-releases']) {
        // this.getCategoryGames$ = this.store.select(getNewReleasesGames);
      }
      if (this.gameCategory === CasinoGameCategory['jackpot-games']) {
        // this.getCategoryGames$ = this.store.select(getJackpotGames);
      }
    });

    this.route.queryParams.subscribe((params) => {
      let page = 1;
      if (params['page']) {
        page = params['page'];
      }
      if (this.gameCategory === CasinoGameCategory['hot-slots']) {
        this.store.dispatch(CasinoPageActions.loadSlotsGamesPage({ page }));
        this.getCategoryGames$ = this.store.select(selectSlotsGamesPage);
      }
    });
  }

  pageChanged(page: PageEvent) {
    this.store.dispatch(
      CasinoPageActions.loadSlotsGamesPage({ page: page.pageIndex + 1 })
    );
    this.router.navigate([], {
      queryParams: { page: page.pageIndex + 1 },
      relativeTo: this.route,
    });
  }
}
