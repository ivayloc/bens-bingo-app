import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelpDeskMessage } from '../../models/help-desk-message';
import { getOutboxMessages, State } from '../../state';
import { HelpDeskPageActions } from '../../state/actions';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss'],
})
export class SentComponent implements OnInit {
  getOutboxMessages$ = new Observable<MatTableDataSource<HelpDeskMessage>>();

  constructor(
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(HelpDeskPageActions.loadOutboxMessages());
    this.getOutboxMessages$ = this.store.select(getOutboxMessages);
  }

  viewMessage(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
