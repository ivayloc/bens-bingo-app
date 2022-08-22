import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, Observable, tap } from 'rxjs';
import { selectUserInfo } from 'src/app/state';
import { UserProfile } from '../../models/user-profile';
import { UserProfilePicture } from '../../models/user-profile-picture';
import {
  getSelectedUserAlias,
  selectSelectedUserprofileForEdit,
  selectUserProfilePicture,
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
  userProfilePictureField = this.fb.control('');
  userProfilePictureSource = '';
  userProfilePicturePreview = '';
  getSelectedUserProfile$ = new Observable<UserProfile>();
  getSelectedUserAlias$ = new Observable<string>();
  getSelectedUserProfilePicture$ = new Observable<UserProfilePicture>();

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
    this.getSelectedUserProfilePicture$ = this.store.select(
      selectUserProfilePicture
    );
  }

  saveUserProfile(alias: string) {
    const payload = this.publicProfileForm.getRawValue();
    this.store.dispatch(AccountPageActions.saveUserProfile({ payload }));

    if (this.userProfilePictureSource) {
      this.store.dispatch(
        AccountPageActions.saveUserProfilePicture({
          picture: this.userProfilePictureSource,
          alias,
        })
      );
    }
    this.router.navigate(['account/public-profile'], {
      queryParams: { alias },
    });
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.userProfilePictureSource = event.target.files[0];

      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.userProfilePicturePreview = reader.result as string;
      };
    }
  }
  removeSelectedPicture() {
    this.userProfilePicturePreview = '';
  }
}
