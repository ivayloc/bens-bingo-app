import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsUserLoggedIn } from 'src/app/state';
import { AppPageActions } from 'src/app/state/actions';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private store: Store) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const usersessionId = localStorage.getItem('usersessionid');
    if (!usersessionId) {
      this.store.dispatch(AppPageActions.showLogin());
      return this.store.select(selectIsUserLoggedIn);
    }

    return true;
  }
}
