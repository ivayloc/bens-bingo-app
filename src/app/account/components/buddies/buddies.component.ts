import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Friend } from '../../models/friend';
import { SearchUserResult } from '../../models/search-user-result';
import {
  getFriends,
  getPendingFriendsRequest,
  getPendingOutgoingFriendsRequest,
  getSearchUserResult,
} from '../../state';
import { AccountPageActions } from '../../state/actions';
import { PublicProfileComponent } from '../public-profile/public-profile.component';

@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.component.html',
  styleUrls: ['./buddies.component.scss'],
})
export class FriendsComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('outgoingFriendsRequest')
  outgoingFriendsRequest!: ElementRef<HTMLDivElement>;
  searchFriendForm = this.fb.group({ search: ['', Validators.required] });

  public get searchBuddyField(): FormControl {
    return this.searchFriendForm.get('search') as FormControl;
  }

  displayedColumns = ['alias', 'online', 'currentLocation', 'action'];

  getFriends$ = new Observable<MatTableDataSource<Friend>>();
  getPendingFriends$ = new Observable<MatTableDataSource<Friend>>();
  getPendingOutgoingFriendsRequest$ = new Observable<
    MatTableDataSource<Friend>
  >();
  getSearchUserResult$ = new Observable<SearchUserResult>();

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store.dispatch(AccountPageActions.loadFriends());

    this.getFriends$ = this.store.select(getFriends);
    this.getPendingFriends$ = this.store.select(getPendingFriendsRequest);

    this.getPendingOutgoingFriendsRequest$ = this.store.select(
      getPendingOutgoingFriendsRequest
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

    this.dialog.open(PublicProfileComponent, {
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

  addFriend(friendalias: string) {
    this.store.dispatch(AccountPageActions.addFriend({ friendalias }));
    this.outgoingFriendsRequest.nativeElement.scrollIntoView();
  }

  cancelOutgoingFriendRequest(friendalias: string) {
    this.store.dispatch(
      AccountPageActions.cancelOutgoingFriendRequest({ friendalias })
    );
  }

  approveFriendRequest(friendalias: string) {
    this.store.dispatch(
      AccountPageActions.approveFriendRequest({ friendalias })
    );
  }
}
