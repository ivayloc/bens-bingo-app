import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PublicProfileComponent } from 'src/app/account/components/public-profile/public-profile.component';
import { AccountPageActions } from 'src/app/account/state/actions';
import { selectChatModerators } from 'src/app/state';
import { AppPageActions } from 'src/app/state/actions';
import { Member } from '../../models/member';

@Component({
  selector: 'app-chat-moderators',
  templateUrl: './chat-moderators.component.html',
  styleUrls: ['./chat-moderators.component.scss'],
})
export class ChatModeratorsComponent implements OnInit {
  getChatModerators$ = new Observable<Member[]>();

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(AppPageActions.getChatModerators());
    this.getChatModerators$ = this.store.select(selectChatModerators);
  }

  showUserProfile(alias: string) {
    this.store.dispatch(
      AccountPageActions.showUserProfile({ friendalias: alias })
    );

    this.dialog.open(PublicProfileComponent, {
      width: '52vw',
      panelClass: 'site-details-dialog',
    });
  }
}
