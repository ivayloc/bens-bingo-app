import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { Friend } from '../../models/friend';
import { getFriends, getPendingFriends, State } from '../../state';
import { AccountPageActions } from '../../state/actions';
import { UserProfileDialogComponent } from '../user-profile-dialog/user-profile-dialog.component';

@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.component.html',
  styleUrls: ['./buddies.component.scss'],
})
export class FriendsComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  searchBuddyField = this.fb.control('');
  displayedColumns = ['alias', 'online', 'currentLocation', 'action'];

  getFriends$ = new Observable<MatTableDataSource<Friend>>();
  getPendingFriends$ = new Observable<MatTableDataSource<Friend>>();

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
}
