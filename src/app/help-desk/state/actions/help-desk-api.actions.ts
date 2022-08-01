import { createAction, props } from '@ngrx/store';
import { HelpDeskChat } from '../../models/help-desk-chat';
import { HelpDeskMessage } from '../../models/help-desk-message';

export const loadInboxMessagesSuccess = createAction(
  '[Help Desk API] Get inbox messages SUCCESS',
  props<{ inboxMessages: HelpDeskMessage[] }>()
);

export const loadInboxMessagesFailure = createAction(
  '[HelpDesk/Inbox API] Get inbox messages FAILURE',
  props<{ error: string }>()
);

export const loadHelpDeskChatSuccess = createAction(
  '[HelpDesk/Inbox API] Get help desk chat SUCCESS',
  props<{ helpDeskChat: HelpDeskChat }>()
);

export const loadHelpDeskChatFailure = createAction(
  '[HelpDesk/Inbox API] Get help desk chat FAILURE',
  props<{ error: string }>()
);
