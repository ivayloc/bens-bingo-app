import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of } from 'rxjs';
import { CasinoService } from 'src/app/shared/services/casino.service';
import { CasinoApiActions, CasinoPageActions } from './actions';

@Injectable()
export class CasinoEffects {
  constructor(
    private actions$: Actions,
    private casinoService: CasinoService
  ) {}

  loadCasinoDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CasinoPageActions.loadCasinoDetails),
      mergeMap(() =>
        forkJoin({
          slotsGames: this.casinoService.getSlotsGamesCarousel(),
          newReleases: this.casinoService.getNewReleasesGamesCarousel(),
        }).pipe(
          map((casinoDetails) =>
            CasinoApiActions.loadCasinoDetailsSuccess({
              casinoDetails,
            })
          ),
          catchError((error) =>
            of(CasinoApiActions.loadCasinoDetailsFailure({ error }))
          )
        )
      )
    );
  });

  loadSlotsGamesPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CasinoPageActions.loadSlotsGamesPage),
      mergeMap(({ page }) =>
        this.casinoService.getSlotsGamesPage(page).pipe(
          map((slotsGames) =>
            CasinoApiActions.loadGamesPageSuccess({
              gamesCategoryPage: slotsGames,
            })
          ),
          catchError((error) =>
            of(CasinoApiActions.loadGamesPageFailure({ error }))
          )
        )
      )
    );
  });

  loadNewReleasesGamesPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CasinoPageActions.loadNewReleasesGamesPage),
      mergeMap(({ page }) =>
        this.casinoService.getNewReleasesGamesPage(page).pipe(
          map((newReleasesGames) =>
            CasinoApiActions.loadGamesPageSuccess({
              gamesCategoryPage: newReleasesGames,
            })
          ),
          catchError((error) =>
            of(CasinoApiActions.loadGamesPageFailure({ error }))
          )
        )
      )
    );
  });

  loadTabletGamesPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CasinoPageActions.loadTableGamesPage),
      mergeMap(({ page }) =>
        this.casinoService.getTableGamesPage(page).pipe(
          map((tableGames) =>
            CasinoApiActions.loadGamesPageSuccess({
              gamesCategoryPage: tableGames,
            })
          ),
          catchError((error) =>
            of(CasinoApiActions.loadGamesPageFailure({ error }))
          )
        )
      )
    );
  });

  loadAllSlotsGamesPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CasinoPageActions.loadAllSlotsGamesPage),
      mergeMap(({ page }) =>
        this.casinoService.getAllSlotsGamesPage(page).pipe(
          map((allSLotsGames) =>
            CasinoApiActions.loadGamesPageSuccess({
              gamesCategoryPage: allSLotsGames,
            })
          ),
          catchError((error) =>
            of(CasinoApiActions.loadGamesPageFailure({ error }))
          )
        )
      )
    );
  });

  loadAllGamesPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CasinoPageActions.loadAllGamesPage),
      mergeMap(({ page }) =>
        this.casinoService.getAllGamesPage(page).pipe(
          map((allGames) =>
            CasinoApiActions.loadAllGamesSuccess({
              allGames,
            })
          ),
          catchError((error) =>
            of(CasinoApiActions.loadAllGamesFailure({ error }))
          )
        )
      )
    );
  });
}
