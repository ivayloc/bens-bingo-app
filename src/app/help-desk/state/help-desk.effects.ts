import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { HelpDeskService } from '../services/help-desk.service';
import { HelpDeskApiActions, HelpDeskPageActions } from './actions';

@Injectable()
export class HelpDeskEffects {
  constructor(
    private actions$: Actions,
    private helpDeskService: HelpDeskService
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

  loadHelpDeskChat = createEffect(() => {
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

  archiveHelpDeskChat = createEffect(() => {
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
  helpDeskChatReply = createEffect(() => {
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
}
