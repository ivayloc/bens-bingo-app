import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectIsUserLoggedIn } from 'src/app/state';
import { AppPageActions } from 'src/app/state/actions';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private store: Store, private router: Router) {}
  canActivate({
    url,
  }: RouterStateSnapshot):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(selectIsUserLoggedIn).pipe(
      tap((isLogged) => {
        if (!isLogged) {
          this.store.dispatch(AppPageActions.showLogin());
        }
        if (url) {
          localStorage.setItem('redirectTo', url);
        }
      })
    );
  }
  canLoad({
    path,
  }: Route):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(selectIsUserLoggedIn).pipe(
      tap((isLogged) => {
        if (!isLogged) {
          this.store.dispatch(AppPageActions.showLogin());
        }
        if (path) {
          localStorage.setItem('redirectTo', path);
        }
      })
    );
  }
}
