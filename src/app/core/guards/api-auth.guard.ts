import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { isAfter } from 'date-fns';
import { map, Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiAuthGuard implements CanLoad {
  constructor(private authService: AuthService, private store: Store) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const jwt = localStorage.getItem('jwt');
    const jwtExpirationTime = localStorage.getItem('jwtExpirationTime');
    let apiLoginExpired = false;

    if (jwtExpirationTime) {
      apiLoginExpired = isAfter(new Date(), new Date(+jwtExpirationTime));
    }

    if (!jwt || apiLoginExpired) {
      localStorage.removeItem('jwt');
      localStorage.removeItem('jwtExpirationTime');

      return this.authService
        .apiLogin()
        .pipe(map(({ access_token }) => !!access_token));
    }
    return true;
  }
}
