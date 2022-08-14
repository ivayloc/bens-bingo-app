import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsUserLoggedIn } from 'src/app/state';
import { AppPageActions } from 'src/app/state/actions';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
})
export class LoginButtonComponent implements OnInit {
  selectIsUserLoggedIn$ = new Observable<boolean>();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.selectIsUserLoggedIn$ = this.store.select(selectIsUserLoggedIn);

    if (!!localStorage.getItem('usersessionid')) {
      this.store.dispatch(AppPageActions.userIsLoggedIn());
    }
  }

  showLogin() {
    this.store.dispatch(AppPageActions.showLogin());
  }

  logout() {
    this.store.dispatch(AppPageActions.userLogout());
  }
}
