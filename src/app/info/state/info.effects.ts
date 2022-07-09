import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of } from 'rxjs';
import { CasinoService } from 'src/app/shared/services/casino.service';
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
}
