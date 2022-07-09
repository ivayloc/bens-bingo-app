import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss'],
})
export class NewTicketComponent {
  newTicketForm = this.fb.group({
    subject: '',
    body: '',
    attachments: '',
  });

  quickQuestionField = this.fb.control('');

  constructor(private fb: FormBuilder) {}
}
