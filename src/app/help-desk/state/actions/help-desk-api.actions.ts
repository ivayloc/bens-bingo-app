import { createAction, props } from '@ngrx/store';
import { HelpDeskMessage } from '../../models/help-desk-message';

export const loadInboxMessagesSuccess = createAction(
  '[Account API] Get inbox messages SUCCESS',
  props<{ inboxMessages: HelpDeskMessage[] }>()
);

export const loadInboxMessagesFailure = createAction(
  '[Account API] Get inbox messages FAILURE',
  props<{ error: string }>()
);
