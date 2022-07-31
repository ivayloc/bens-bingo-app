import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelpDeskMessage } from '../../models/help-desk-message';
import { getInboxMessages, State } from '../../state';
import { HelpDeskPageActions } from '../../state/actions';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  displayedColumns = ['time', 'title', 'options'];

  getInboxMessages$ = new Observable<MatTableDataSource<HelpDeskMessage>>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(HelpDeskPageActions.loadInboxMessages());

    this.getInboxMessages$ = this.store.select(getInboxMessages);
  }

  openMessage(id: number) {}
}
