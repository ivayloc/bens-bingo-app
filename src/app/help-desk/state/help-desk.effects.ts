import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of, tap, switchMap } from 'rxjs';
import { HelpDeskService } from '../services/help-desk.service';
import { HelpDeskApiActions, HelpDeskPageActions } from './actions';

@Injectable()
export class HelpDeskEffects {
  constructor(
    private actions$: Actions,
    private helpDeskService: HelpDeskService,
    private router: Router
  ) {}

  loadInboxMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.loadInboxMessages),
      mergeMap(() =>
        this.helpDeskService.getInboxMessages().pipe(
          switchMap((inboxMessages) => [
            HelpDeskApiActions.loadInboxMessagesSuccess({
              inboxMessages,
            }),
            HelpDeskPageActions.saveInLocalStorage({
              payload: { isAdmin: false },
            }),
          ]),
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
          switchMap((outboxMessages) => [
            HelpDeskApiActions.loadOutboxMessagesSuccess({
              outboxMessages,
            }),
            HelpDeskPageActions.saveInLocalStorage({
              payload: { isAdmin: false },
            }),
          ]),
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
          switchMap((archivedMessages) => [
            HelpDeskApiActions.loadArchivedMessagesSuccess({
              archivedMessages,
            }),
            HelpDeskPageActions.saveInLocalStorage({
              payload: { isAdmin: false },
            }),
          ]),
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
          switchMap((customerServiceMessages) => [
            HelpDeskApiActions.loadCustomerServiceMessagesSuccess({
              customerServiceMessages,
            }),
            HelpDeskPageActions.saveInLocalStorage({
              payload: { isAdmin: true },
            }),
          ]),
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
        ofType(HelpDeskPageActions.saveInLocalStorage),
        tap(({ payload }) => {
          localStorage.setItem('helpDesk', JSON.stringify(payload));
        })
      );
    },
    { dispatch: false }
  );
}
