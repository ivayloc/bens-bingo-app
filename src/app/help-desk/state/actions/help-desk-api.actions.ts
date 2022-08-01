import { createAction, props } from '@ngrx/store';
import { HelpDeskChat } from '../../models/help-desk-chat';
import { HelpDeskMessage } from '../../models/help-desk-message';

export const loadInboxMessagesSuccess = createAction(
  '[Account API] Get inbox messages SUCCESS',
  props<{ inboxMessages: HelpDeskMessage[] }>()
);

export const loadInboxMessagesFailure = createAction(
  '[Account API] Get inbox messages FAILURE',
  props<{ error: string }>()
);

export const loadSelectedInboxMessageSuccess = createAction(
  '[Account API] Get inbox message SUCCESS',
  props<{ selectedInboxMessage: HelpDeskChat }>()
);

export const loadSelectedInboxMessageFailure = createAction(
  '[Account API] Get inbox message FAILURE',
  props<{ error: string }>()
);
