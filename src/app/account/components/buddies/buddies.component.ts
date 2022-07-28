import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { Friend } from '../../models/friend';
import { SearchUserResult } from '../../models/search-user-result';
import {
  getFriends,
  getPendingFriends,
  getSearchUserResult,
  State,
} from '../../state';
import { AccountPageActions } from '../../state/actions';
import { UserProfileDialogComponent } from '../user-profile-dialog/user-profile-dialog.component';

@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.component.html',
  styleUrls: ['./buddies.component.scss'],
})
export class FriendsComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  searchFriendForm = this.fb.group({ search: ['', Validators.required] });

  public get searchBuddyField(): FormControl {
    return this.searchFriendForm.get('search') as FormControl;
  }

  displayedColumns = ['alias', 'online', 'currentLocation', 'action'];

  getFriends$ = new Observable<MatTableDataSource<Friend>>();
  getPendingFriends$ = new Observable<MatTableDataSource<Friend>>();
  getSearchUserResult$ = new Observable<SearchUserResult>();

  constructor(
    private store: Store<State>,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store.dispatch(AccountPageActions.loadFriends());

    this.getFriends$ = this.store.select(getFriends).pipe(
      map((matTableDataSource) => {
        matTableDataSource.sort = this.sort;
        return matTableDataSource;
      })
    );
    this.getPendingFriends$ = this.store.select(getPendingFriends).pipe(
      map((matTableDataSource) => {
        matTableDataSource.sort = this.sort;
        return matTableDataSource;
      })
    );

    this.getSearchUserResult$ = this.store.select(getSearchUserResult);
  }

  removeFriend(friendalias: string) {
    this.store.dispatch(AccountPageActions.removeFriend({ friendalias }));
  }

  declinePendingFriendRequest(friendalias: string) {
    this.store.dispatch(
      AccountPageActions.declinePendingFriendRequest({ friendalias })
    );
  }

  showUserProfile(friendalias: string) {
    this.store.dispatch(AccountPageActions.showUserProfile({ friendalias }));

    this.dialog.open(UserProfileDialogComponent, {
      width: '52vw',
      panelClass: 'site-details-dialog',
    });
  }

  searchUser() {
    this.searchBuddyField.markAsTouched();
    if (this.searchBuddyField.invalid) {
      return;
    }
    const friendalias: string = this.searchBuddyField.value;
    this.store.dispatch(AccountPageActions.searchUser({ friendalias }));
  }
}
