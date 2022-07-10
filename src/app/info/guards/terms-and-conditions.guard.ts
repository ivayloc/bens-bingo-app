import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { SiteInfoService } from '../service/site-info.service';

@Injectable({
  providedIn: 'root',
})
export class TermsAndConditionsGuard implements CanActivate {
  constructor(private siteInfoService: SiteInfoService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.siteInfoService.getTermsAndConditions().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
