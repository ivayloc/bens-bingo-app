import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
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
  getInboxMessages$ = new Observable<MatTableDataSource<HelpDeskMessage>>();

  constructor(
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(HelpDeskPageActions.loadInboxMessages());

    this.getInboxMessages$ = this.store.select(getInboxMessages);
  }

  viewMessage(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
