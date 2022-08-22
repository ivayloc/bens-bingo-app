import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable } from 'rxjs';
import { selectUserInfo } from 'src/app/state';
import { UserProfile } from '../../models/user-profile';
import { UserProfileDetails } from '../../models/user-profile-details';
import { UserProfilePicture } from '../../models/user-profile-picture';
import {
  getSelectedUserAlias,
  getSelectedUserProfile,
  selectUserProfilePicture,
} from '../../state';
import { AccountPageActions } from '../../state/actions';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss'],
})
export class PublicProfileComponent implements OnInit {
  isContentFluid = false;
  getSelectedUserProfile$ = new Observable<
    UserProfile<Map<string, UserProfileDetails>>
  >();
  getSelectedUserAlias$ = new Observable<string>();
  getSelectedUserProfilePicture$ = new Observable<UserProfilePicture>();

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams['alias']) {
        this.isContentFluid = true;
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

    this.getSelectedUserProfile$ = this.store.select(getSelectedUserProfile);
    this.getSelectedUserProfilePicture$ = this.store.select(
      selectUserProfilePicture
    );
    this.getSelectedUserAlias$ = this.store.select(getSelectedUserAlias);
  }
}
