import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, Observable } from 'rxjs';
import { selectIsUserLoggedIn, selectUserInfo } from 'src/app/state';
import { UserInfo } from '../../models/user-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  getUserInfo$ = new Observable<UserInfo>();
  isUserLoggedIn$ = new Observable<boolean>();

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.getUserInfo$ = this.store.select(selectUserInfo);
    this.isUserLoggedIn$ = this.store
      .select(selectIsUserLoggedIn)
      .pipe(delay(0));
  }

  showUserProfile(friendalias: string) {
    this.router.navigate(['account/public-profile'], {
      queryParams: { friendalias },
    });
  }
}
