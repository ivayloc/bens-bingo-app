import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { isAfter } from 'date-fns';
import { Observable } from 'rxjs';
import { AppPageActions } from 'src/app/state/actions';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService
  ) {}
  canActivate({
    url,
  }: RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isLogger();
  }
  canLoad({
    path,
  }: Route):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return this.authService.apiRefreshToken().pipe(
    //   tap(({ access_token, expires_in }) => {
    //     localStorage.setItem('jwt', access_token);
    //     const jwtExpirationTime = addSeconds(new Date(), expires_in);
    //     localStorage.setItem(
    //       'jwtExpirationTime',
    //       jwtExpirationTime.getTime().toString()
    //     );
    //   }),
    //   map(() => true)
    // );
    return this.isLogger();
  }

  private isLogger() {
    const jwtExpirationTime = localStorage.getItem('jwtExpirationTime');
    if (jwtExpirationTime) {
      const apiLoginExpired = isAfter(new Date(), new Date(+jwtExpirationTime));

      if (apiLoginExpired) {
        this.store.dispatch(AppPageActions.showLogin());
        return false;
      }
    }
    return true;
  }
}
