import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelpDeskMessage } from '../../models/help-desk-message';
import { getArchivedMessages, State } from '../../state';
import { HelpDeskPageActions } from '../../state/actions';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.scss'],
})
export class ArchivedComponent implements OnInit {
  getArchivedMessages$ = new Observable<MatTableDataSource<HelpDeskMessage>>();

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(HelpDeskPageActions.loadArchivedMessages());

    this.getArchivedMessages$ = this.store.select(getArchivedMessages);
  }

  viewMessage(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
