import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelpDeskQuestion } from 'src/app/help-desk/models/help-desk-question';
import { HelpDeskMessage } from '../../models/help-desk-message';
import { getHelpDeskQuestions, getOutboxMessages, State } from '../../state';
import { HelpDeskPageActions } from '../../state/actions';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss'],
})
export class NewTicketComponent implements OnInit {
  newTicketForm = this.fb.group({
    subject: '',
    body: '',
    attachments: '',
  });

  getHelpDeskQuestions$ = new Observable<HelpDeskQuestion[]>();

  quickQuestionField = this.fb.control('');

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(HelpDeskPageActions.loadHelpDeskQuestions());

    this.getHelpDeskQuestions$ = this.store.select(getHelpDeskQuestions);
  }
}
