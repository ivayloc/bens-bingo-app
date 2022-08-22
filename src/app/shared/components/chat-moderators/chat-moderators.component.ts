import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AppPageActions.getChatModerators());
    this.getChatModerators$ = this.store.select(selectChatModerators);
  }
}
