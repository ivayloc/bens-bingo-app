import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable, tap } from 'rxjs';
import { selectUserInfo } from 'src/app/state';
import { UserProfile } from '../../models/user-profile';
import {
  getSelectedUserAlias,
  selectSelectedUserprofileForEdit,
} from '../../state';
import { AccountPageActions } from '../../state/actions';

@Component({
  selector: 'app-public-profile-edit',
  templateUrl: './public-profile-edit.component.html',
  styleUrls: ['./public-profile-edit.component.scss'],
})
export class PublicProfileEditComponent implements OnInit {
  publicProfileForm = this.fb.group({
    aboutme: [],
    age: [],
    biggestjackpot: [],
    books: [],
    children: [],
    favquote: [],
    hobbies: [],
    interests: [],
    location: [],
    movies: [],
    music: [],
    pets: [],
    zodiac: [],
  });
  getSelectedUserProfile$ = new Observable<UserProfile>();
  getSelectedUserAlias$ = new Observable<string>();

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams['alias']) {
        this.store.dispatch(
          AccountPageActions.showUserProfile({
            friendalias: queryParams['alias'],
          })
        );
      }
    });

    this.store
      .select(selectUserInfo)
      .pipe(distinctUntilChanged())
      .subscribe((data) => console.log(data));

    this.getSelectedUserProfile$ = this.store
      .select(selectSelectedUserprofileForEdit)
      .pipe(
        tap((profile) => {
          this.publicProfileForm.patchValue(profile.profile);
        })
      );

    this.getSelectedUserAlias$ = this.store.select(getSelectedUserAlias);
  }

  saveUserProfile(alias: string) {
    const payload = this.publicProfileForm.getRawValue();
    this.store.dispatch(AccountPageActions.saveUserProfile({ payload }));
    this.router.navigate(['account/public-profile'], {
      queryParams: { alias },
    });
  }
}
