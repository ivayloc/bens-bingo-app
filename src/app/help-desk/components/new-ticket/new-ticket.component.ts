import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelpDeskQuestion } from 'src/app/help-desk/models/help-desk-question';
import { HelpDeskNewTicket } from '../../models/help-desk-new-ticket';
import { getHelpDeskQuestions, State } from '../../state';
import { HelpDeskPageActions } from '../../state/actions';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss'],
})
export class NewTicketComponent implements OnInit {
  newTicketForm = this.fb.group({
    subject: 'New Ticket',
    body: ['', [Validators.required, Validators.minLength(10)]],
    attachments: '',
  });
  quickQuestionField = this.fb.control('');

  getHelpDeskQuestions$ = new Observable<HelpDeskQuestion[]>();

  constructor(private store: Store, private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(HelpDeskPageActions.loadHelpDeskQuestions());

    this.getHelpDeskQuestions$ = this.store.select(getHelpDeskQuestions);
  }

  newQuestion() {
    const id: number = this.quickQuestionField.value;
    this.store.dispatch(HelpDeskPageActions.submitNewQuestion({ id }));
  }

  createNewTicket() {
    const payload = this.newTicketForm.value;

    this.store.dispatch(HelpDeskPageActions.createNewTicket({ payload }));
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.newTicketForm.get('attachments')?.setValue(file);
    }
  }
}
