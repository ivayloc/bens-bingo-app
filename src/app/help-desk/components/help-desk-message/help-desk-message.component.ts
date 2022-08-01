import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelpDeskChat } from '../../models/help-desk-chat';
import { getSelectedInboxMessage, State } from '../../state';
import { HelpDeskPageActions } from '../../state/actions';

@Component({
  selector: 'app-help-desk-message',
  templateUrl: './help-desk-message.component.html',
  styleUrls: ['./help-desk-message.component.scss'],
})
export class HelpDeskMessageComponent implements OnInit {
  replayForm = this.fb.group({
    message: ['', Validators.required],
  });
  getInboxMessage$ = new Observable<HelpDeskChat>();

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.store.dispatch(
          HelpDeskPageActions.loadSelectedInboxMessage({ id: +params['id'] })
        );
      }
    });

    this.getInboxMessage$ = this.store.select(getSelectedInboxMessage);
  }
}
