import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HelpDeskChat } from '../../models/help-desk-chat';
import { HelpDeskMessageAttachment } from '../../models/help-desk-message-attachment';
import { HelpDeskMessageType } from '../../models/help-desk-message-type';
import { HelpDeskMessageTypes } from '../../models/help-desk-message-types';
import { HelpDeskReply } from '../../models/help-desk-reply';
import { getHelpDeskChat, State } from '../../state';
import { HelpDeskPageActions } from '../../state/actions';

@Component({
  selector: 'app-help-desk-message',
  templateUrl: './help-desk-message.component.html',
  styleUrls: ['./help-desk-message.component.scss'],
})
export class HelpDeskMessageComponent implements OnInit {
  helpDeskMessageTypes = HelpDeskMessageType;
  helpDeskMessageType = '' as HelpDeskMessageTypes;
  get messageField(): FormControl {
    return this.replyForm.get('message') as FormControl;
  }
  // TODO: Replace with state
  hideSendFeedbackForm = false;
  replyForm = this.fb.group({
    message: ['', Validators.required],
  });

  feedbackRatingField = this.fb.control('');

  responseRates = [
    { label: 'Yes', value: 1 },
    { label: 'Somewhat', value: 0 },
    { label: 'No', value: -1 },
  ];
  messageId!: number;

  getHelpDeskChat$ = new Observable<HelpDeskChat>();

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.helpDeskMessageType = localStorage.getItem(
        'helpDeskMessageType'
      ) as HelpDeskMessageTypes;

      if (params['id']) {
        this.store.dispatch(
          HelpDeskPageActions.loadHelpDeskChat({
            id: +params['id'],
            isFromAdmin:
              this.helpDeskMessageType === HelpDeskMessageType.isAdmin,
          })
        );
      }
    });

    this.getHelpDeskChat$ = this.store.select(getHelpDeskChat);
  }

  archiveChat(id: number) {
    this.store.dispatch(HelpDeskPageActions.archiveHelpDeskChat({ id }));
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  deleteChat(id: number) {
    this.store.dispatch(HelpDeskPageActions.deleteHelpDeskChat({ id }));
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  hideChat(id: number) {
    this.store.dispatch(HelpDeskPageActions.hideHelpDeskChat({ id }));
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  chatReply(id: number) {
    const payload: HelpDeskReply = {
      id,
      body: this.messageField.value,
      returnticket: true,
    };

    this.store.dispatch(HelpDeskPageActions.helpDeskChatReply({ payload }));
    this.messageField.reset();
    this.router.navigate(['/help-desk/sent']);
  }

  getMessageAttachment({ id, num }: HelpDeskMessageAttachment) {
    const payload = {
      id,
      num,
    };
    this.store.dispatch(
      HelpDeskPageActions.loadHelpDeskMessageAttachment({ payload })
    );
  }

  sendFeedback(id: number) {
    const payload = {
      id,
      rating: this.feedbackRatingField.value,
    };
    this.store.dispatch(
      HelpDeskPageActions.sendHelpDeskChatFeedback({ payload })
    );
    this.hideSendFeedbackForm = true;
  }
}
