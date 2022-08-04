import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelpDeskMessage } from '../../models/help-desk-message';
import {
  getArchivedMessages,
  getCustomerServiceMessages,
  State,
} from '../../state';
import { HelpDeskPageActions } from '../../state/actions';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.scss'],
})
export class CustomerServiceComponent implements OnInit {
  getCustomerServiceMessages$ = new Observable<
    MatTableDataSource<HelpDeskMessage>
  >();

  constructor(
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(HelpDeskPageActions.loadCustomerServiceMessages());

    this.getCustomerServiceMessages$ = this.store.select(
      getCustomerServiceMessages
    );
  }

  viewMessage(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
