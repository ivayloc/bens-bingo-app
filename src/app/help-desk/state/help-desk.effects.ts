import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { HelpDeskMessageAttachmentDialogComponent } from '../components/help-desk-message-attachment-dialog/help-desk-message-attachment-dialog.component';
import { HelpDeskMessageType } from '../models/help-desk-message-type';
import { HelpDeskMessageTypes } from '../models/help-desk-message-types';
import { HelpDeskService } from '../services/help-desk.service';
import { HelpDeskApiActions, HelpDeskPageActions } from './actions';

@Injectable()
export class HelpDeskEffects {
  constructor(
    private actions$: Actions,
    private helpDeskService: HelpDeskService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  loadInboxMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.loadInboxMessages),
      mergeMap(() =>
        this.helpDeskService.getInboxMessages().pipe(
          map((inboxMessages) =>
            HelpDeskApiActions.loadInboxMessagesSuccess({
              inboxMessages,
            })
          ),
          catchError((error) =>
            of(HelpDeskApiActions.loadInboxMessagesFailure({ error }))
          )
        )
      )
    );
  });

  loadOutboxMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.loadOutboxMessages),
      mergeMap(() =>
        this.helpDeskService.getOutboxMessages().pipe(
          map((outboxMessages) =>
            HelpDeskApiActions.loadOutboxMessagesSuccess({
              outboxMessages,
            })
          ),
          catchError((error) =>
            of(HelpDeskApiActions.loadOutboxMessagesFailure({ error }))
          )
        )
      )
    );
  });

  loadArchivedMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.loadArchivedMessages),
      mergeMap(() =>
        this.helpDeskService.getArchivedMessages().pipe(
          map((archivedMessages) =>
            HelpDeskApiActions.loadArchivedMessagesSuccess({
              archivedMessages,
            })
          ),
          catchError((error) =>
            of(HelpDeskApiActions.loadArchivedMessagesFailure({ error }))
          )
        )
      )
    );
  });

  loadCustomerServiceMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.loadCustomerServiceMessages),
      mergeMap(() =>
        this.helpDeskService.getCustomerServiceMessages().pipe(
          map((customerServiceMessages) =>
            HelpDeskApiActions.loadCustomerServiceMessagesSuccess({
              customerServiceMessages,
            })
          ),
          catchError((error) =>
            of(HelpDeskApiActions.loadCustomerServiceMessagesFailure({ error }))
          )
        )
      )
    );
  });

  loadHelpDeskChat$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.loadHelpDeskChat),
      mergeMap(({ id, isFromAdmin }) =>
        this.helpDeskService.getHelpDeskChat(id, isFromAdmin).pipe(
          map((helpDeskChat) =>
            HelpDeskApiActions.loadHelpDeskChatSuccess({
              helpDeskChat,
            })
          ),
          catchError((error) =>
            of(HelpDeskApiActions.loadHelpDeskChatFailure({ error }))
          )
        )
      )
    );
  });

  setHelpDeskChatViewed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskApiActions.loadHelpDeskChatSuccess),
      mergeMap(({ helpDeskChat }) =>
        this.helpDeskService.setHelpDeskChatViewed(helpDeskChat.id).pipe(
          map(() => HelpDeskApiActions.setHelpDeskChatViewedSuccess()),
          catchError((error) =>
            of(HelpDeskApiActions.setHelpDeskChatViewedFailure({ error }))
          )
        )
      )
    );
  });

  loadHelpDeskMessageAttachment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.loadHelpDeskMessageAttachment),
      mergeMap(({ payload }) =>
        this.helpDeskService.getHelpDeskMessageAttachment(payload).pipe(
          map((attachment) =>
            HelpDeskApiActions.loadHelpDeskMessageAttachmentSuccess({
              attachment,
            })
          ),
          catchError((error) =>
            of(
              HelpDeskApiActions.loadHelpDeskMessageAttachmentFailure({ error })
            )
          )
        )
      )
    );
  });

  openHelpDeskMessageAttachment$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(HelpDeskApiActions.loadHelpDeskMessageAttachmentSuccess),
        tap(({ attachment }) => {
          this.dialog.open<HelpDeskMessageAttachmentDialogComponent, string>(
            HelpDeskMessageAttachmentDialogComponent,
            {
              data: attachment,
            }
          );
        })
      );
    },
    { dispatch: false }
  );

  archiveHelpDeskChat$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.archiveHelpDeskChat),
      mergeMap(({ id }) =>
        this.helpDeskService.archiveHelpDeskChat(id).pipe(
          map((helpDeskChat) =>
            HelpDeskApiActions.archiveHelpDeskChatSuccess({
              helpDeskChat,
            })
          ),
          catchError((error) =>
            of(HelpDeskApiActions.archiveHelpDeskChatFailure({ error }))
          )
        )
      )
    );
  });

  hideHelpDeskChat$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.hideHelpDeskChat),
      mergeMap(({ id }) =>
        this.helpDeskService.hideHelpDeskChat(id).pipe(
          map(() => HelpDeskApiActions.hideHelpDeskChatSuccess()),
          catchError((error) =>
            of(HelpDeskApiActions.hideHelpDeskChatFailure({ error }))
          )
        )
      )
    );
  });

  helpDeskChatReply$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.helpDeskChatReply),
      mergeMap(({ payload }) =>
        this.helpDeskService.helpDeskChatReply(payload).pipe(
          map((helpDeskChat) =>
            HelpDeskApiActions.helpDeskChatReplySuccess({
              helpDeskChat,
            })
          ),
          catchError((error) =>
            of(HelpDeskApiActions.helpDeskChatReplyFailure({ error }))
          )
        )
      )
    );
  });

  sendHelpDeskChatFeedback$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.sendHelpDeskChatFeedback),
      mergeMap(({ payload }) =>
        this.helpDeskService.sendHelpDeskChatFeedback(payload).pipe(
          map(() => HelpDeskApiActions.sendHelpDeskChatFeedbackSuccess()),
          catchError((error) =>
            of(HelpDeskApiActions.sendHelpDeskChatFeedbackFailure({ error }))
          )
        )
      )
    );
  });

  getHelpDeskQuestions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.loadHelpDeskQuestions),
      mergeMap(() =>
        this.helpDeskService.getHelpDeskQuestions().pipe(
          map((helpDeskQuestions) =>
            HelpDeskApiActions.loadHelpDeskQuestionsSuccess({
              helpDeskQuestions,
            })
          ),
          catchError((error) =>
            of(HelpDeskApiActions.loadHelpDeskQuestionsFailure({ error }))
          )
        )
      )
    );
  });
  submitNewQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.submitNewQuestion),
      mergeMap(({ id }) =>
        this.helpDeskService.submitNewQuestion(id).pipe(
          map((submittedQuestionId) =>
            HelpDeskApiActions.submitNewQuestionSuccess({
              submittedQuestionId,
            })
          ),
          catchError((error) =>
            of(HelpDeskApiActions.submitNewQuestionFailure({ error }))
          )
        )
      )
    );
  });

  createNewTicket$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.createNewTicket),
      mergeMap(({ payload }) =>
        this.helpDeskService.createNewTicket(payload).pipe(
          map((newTicketId) =>
            HelpDeskApiActions.createNewTicketSuccess({
              newTicketId,
            })
          ),
          catchError((error) =>
            of(HelpDeskApiActions.createNewTicketFailure({ error }))
          )
        )
      )
    );
  });

  createNewTicketSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(HelpDeskApiActions.createNewTicketSuccess),
        tap(({ newTicketId }) => {
          this.router.navigate(['help-desk', 'outbox', newTicketId]);
        })
      );
    },
    { dispatch: false }
  );

  submitNewQuestionSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(HelpDeskApiActions.submitNewQuestionSuccess),
        tap(({ submittedQuestionId }) => {
          this.router.navigate(['help-desk', 'outbox', submittedQuestionId]);
        })
      );
    },
    { dispatch: false }
  );

  helpDeskMessageOptions$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          HelpDeskApiActions.loadInboxMessagesSuccess,
          HelpDeskApiActions.loadOutboxMessagesSuccess,
          HelpDeskApiActions.loadArchivedMessagesSuccess,
          HelpDeskApiActions.loadCustomerServiceMessagesSuccess
        ),
        tap(({ type }) => {
          let helpDeskMessageType = '' as HelpDeskMessageTypes;
          if (type === '[Help Desk API] Get inbox messages SUCCESS') {
            helpDeskMessageType = HelpDeskMessageType.isInbox;
          }
          if (type === '[HelpDesk/Outbox API] Get outbox messages SUCCESS') {
            helpDeskMessageType = HelpDeskMessageType.isInbox;
          }
          if (
            type ===
            '[HelpDesk/CustomerService API] Get customer service messages SUCCESS'
          ) {
            helpDeskMessageType = HelpDeskMessageType.isAdmin;
          }
          if (type === '[HelpDesk/Outbox API] Get archived messages SUCCESS') {
            helpDeskMessageType = HelpDeskMessageType.isArchived;
          }
          localStorage.setItem('helpDeskMessageType', helpDeskMessageType);
        })
      );
    },
    { dispatch: false }
  );
}
