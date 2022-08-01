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

  loadHelpDeskChat = createEffect(() => {
    return this.actions$.pipe(
      ofType(HelpDeskPageActions.loadHelpDeskChat),
      mergeMap(({ id }) =>
        this.helpDeskService.getHelpDeskChat(id).pipe(
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
}
