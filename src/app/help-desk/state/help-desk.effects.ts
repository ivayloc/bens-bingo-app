import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of, tap, switchMap } from 'rxjs';
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
