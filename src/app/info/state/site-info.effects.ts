import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { SiteInfoService } from '../service/site-info.service';
import { SiteInfoApiActions, SiteInfoPageActions } from './actions';

@Injectable()
export class SiteInfoEffects {
  constructor(
    private actions$: Actions,
    private siteInfoService: SiteInfoService
  ) {}

  loadTermsAndConditions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SiteInfoPageActions.loadTermsAndConditions),
      mergeMap(() =>
        this.siteInfoService.getTermsAndConditions().pipe(
          map((termsAndConditions) =>
            SiteInfoApiActions.loadTermsAndConditionsSuccess({
              termsAndConditions,
            })
          ),
          catchError((error) =>
            of(SiteInfoApiActions.loadTermsAndConditionsFailure({ error }))
          )
        )
      )
    );
  });

  loadAboutUs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SiteInfoPageActions.loadAboutUs),
      mergeMap(() =>
        this.siteInfoService.getAboutUs().pipe(
          map((aboutUs) =>
            SiteInfoApiActions.loadAboutUsSuccess({
              aboutUs,
            })
          ),
          catchError((error) =>
            of(SiteInfoApiActions.loadAboutUsFailure({ error }))
          )
        )
      )
    );
  });

  loadPageContent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SiteInfoPageActions.loadPageContent),
      mergeMap(({ page }) =>
        this.siteInfoService.getPageContent(page).pipe(
          map((pageContent) =>
            SiteInfoApiActions.loadPageContentSuccess({
              pageContent,
            })
          ),
          catchError((error) =>
            of(SiteInfoApiActions.loadPageContentFailure({ error }))
          )
        )
      )
    );
  });
}
