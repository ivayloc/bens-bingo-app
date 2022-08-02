import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, switchMap, tap } from 'rxjs';
import { HelpDeskChat } from '../../models/help-desk-chat';
import { HelpDeskReply } from '../../models/help-desk-reply';
import { getHelpDeskChat, State } from '../../state';
import { HelpDeskPageActions } from '../../state/actions';

@Component({
  selector: 'app-help-desk-message',
  templateUrl: './help-desk-message.component.html',
  styleUrls: ['./help-desk-message.component.scss'],
})
export class HelpDeskMessageComponent implements OnInit {
  replyForm = this.fb.group({
    message: ['', Validators.required],
  });

  responseRates = [
    { label: 'Yes', valu: 1 },
    { label: 'Somewhat', valu: 0 },
    { label: 'No', value: -1 },
  ];
  messageId!: number;
  public get messageField(): FormControl {
    return this.replyForm.get('message') as FormControl;
  }

  getHelpDeskChat$ = new Observable<HelpDeskChat>();

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const isFromAdmin = JSON.parse(localStorage.getItem('helpDesk') || '');

      if (params['id']) {
        this.store.dispatch(
          HelpDeskPageActions.loadHelpDeskChat({
            id: +params['id'],
            isFromAdmin,
          })
        );
      }
    });

    this.getHelpDeskChat$ = this.store.select(getHelpDeskChat);
  }

  archiveHelpDeskChat(id: number) {
    this.store.dispatch(HelpDeskPageActions.archiveHelpDeskChat({ id }));
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  helpDeskChatReply(id: number) {
    const payload: HelpDeskReply = {
      id,
      body: this.messageField.value,
      returnticket: true,
    };

    this.store.dispatch(HelpDeskPageActions.helpDeskChatReply({ payload }));
    this.messageField.reset();
    this.router.navigate(['/help-desk/sent']);
  }
}
