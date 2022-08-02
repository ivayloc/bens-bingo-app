import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelpDeskQuestion } from 'src/app/help-desk/models/help-desk-question';
import { getHelpDeskQuestions, State } from '../../state';
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
  quickQuestionField = this.fb.control('');

  getHelpDeskQuestions$ = new Observable<HelpDeskQuestion[]>();

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(HelpDeskPageActions.loadHelpDeskQuestions());

    this.getHelpDeskQuestions$ = this.store.select(getHelpDeskQuestions);
  }

  newQuestion() {
    const id: number = this.quickQuestionField.value;
    this.store.dispatch(HelpDeskPageActions.submitNewQuestion({ id }));
  }
}
