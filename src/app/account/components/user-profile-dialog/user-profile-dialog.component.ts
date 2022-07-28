import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { UserProfile } from '../../models/user-profile';
import { getSelectedUserProfile, State } from '../../state';

@Component({
  selector: 'app-user-profile-dialog',
  templateUrl: './user-profile-dialog.component.html',
  styleUrls: ['./user-profile-dialog.component.scss'],
})
export class UserProfileDialogComponent implements OnInit {
  getSelectedUserProfile$ = new Observable<UserProfile>();
  getSelectedUserAlias$ = new Observable<UserProfile>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.getSelectedUserProfile$ = this.store.select(getSelectedUserProfile);
    this.getSelectedUserAlias$ = this.store.select(getSelectedUserProfile);
  }

  closeDialog() {}
}
