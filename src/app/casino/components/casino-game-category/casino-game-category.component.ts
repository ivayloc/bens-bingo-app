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
import { selectAllGames, selectGamesPage } from '../../state';
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
    this.getAllGames$ = this.store.select(selectAllGames);
    this.getCategoryGames$ = this.store.select(selectGamesPage);

    this.route.params.subscribe((params) => {
      this.gameCategory = params['gameCategory'];

      if (this.gameCategory === CasinoGameCategory['hot-slots']) {
        this.store.dispatch(CasinoPageActions.loadSlotsGamesPage({ page: 1 }));
      }
      if (this.gameCategory === CasinoGameCategory['new-releases']) {
        this.store.dispatch(
          CasinoPageActions.loadNewReleasesGamesPage({ page: 1 })
        );
      }
      // if (this.gameCategory === CasinoGameCategory['jackpot-games']) {
      //   this.store.dispatch(
      //     CasinoPageActions.loadJackpotGamesPage({ page: 1 })
      //   );
      // }
      if (this.gameCategory === CasinoGameCategory['table-games']) {
        this.store.dispatch(CasinoPageActions.loadTableGamesPage({ page: 1 }));
      }
      if (this.gameCategory === CasinoGameCategory['all-games']) {
        this.store.dispatch(
          CasinoPageActions.loadAllSlotsGamesPage({ page: 1 })
        );
      }
      if (this.gameCategory !== CasinoGameCategory['all-games']) {
        this.store.dispatch(CasinoPageActions.loadAllGamesPage({ page: 1 }));
      }
    });

    this.route.queryParams.subscribe((params) => {
      let page = 1;
      if (params['page']) {
        page = params['page'];
      } else {
        return;
      }
      if (this.gameCategory === CasinoGameCategory['hot-slots']) {
        this.store.dispatch(CasinoPageActions.loadSlotsGamesPage({ page }));
      }
      if (this.gameCategory === CasinoGameCategory['new-releases']) {
        this.store.dispatch(
          CasinoPageActions.loadNewReleasesGamesPage({ page })
        );
      }
      if (this.gameCategory === CasinoGameCategory['table-games']) {
        this.store.dispatch(CasinoPageActions.loadTableGamesPage({ page }));
      }
      if (this.gameCategory === CasinoGameCategory['all-games']) {
        this.store.dispatch(CasinoPageActions.loadAllSlotsGamesPage({ page }));
      }
    });
  }

  pageChanged(page: PageEvent) {
    if (this.gameCategory === CasinoGameCategory['hot-slots']) {
      this.store.dispatch(
        CasinoPageActions.loadSlotsGamesPage({ page: page.pageIndex + 1 })
      );
    }
    if (this.gameCategory === CasinoGameCategory['new-releases']) {
      this.store.dispatch(
        CasinoPageActions.loadNewReleasesGamesPage({ page: page.pageIndex + 1 })
      );
    }
    if (this.gameCategory === CasinoGameCategory['table-games']) {
      this.store.dispatch(
        CasinoPageActions.loadTableGamesPage({ page: page.pageIndex + 1 })
      );
    }
    if (this.gameCategory === CasinoGameCategory['all-games']) {
      this.store.dispatch(
        CasinoPageActions.loadAllSlotsGamesPage({ page: page.pageIndex + 1 })
      );
    }

    this.router.navigate([], {
      queryParams: { page: page.pageIndex + 1 },
      relativeTo: this.route,
    });
  }
}
