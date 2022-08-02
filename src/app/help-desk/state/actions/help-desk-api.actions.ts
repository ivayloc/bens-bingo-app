import { createAction, props } from '@ngrx/store';
import { HelpDeskChat } from '../../models/help-desk-chat';
import { HelpDeskMessage } from '../../models/help-desk-message';

export const loadInboxMessagesSuccess = createAction(
  '[Help Desk API] Get inbox messages SUCCESS',
  props<{ inboxMessages: HelpDeskMessage[] }>()
);

export const loadOutboxMessagesSuccess = createAction(
  '[HelpDesk/Outbox API] Get outbox messages SUCCESS',
  props<{ outboxMessages: HelpDeskMessage[] }>()
);

export const loadOutboxMessagesFailure = createAction(
  '[HelpDesk/Outbox API] Get outbox messages FAILURE',
  props<{ error: string }>()
);

export const loadArchivedMessagesSuccess = createAction(
  '[HelpDesk/Outbox API] Get archived messages SUCCESS',
  props<{ archivedMessages: HelpDeskMessage[] }>()
);

export const loadArchivedMessagesFailure = createAction(
  '[HelpDesk/Outbox API] Get archived messages FAILURE',
  props<{ error: string }>()
);

export const loadCustomerServiceMessagesSuccess = createAction(
  '[HelpDesk/CustomerService API] Get customer service messages SUCCESS',
  props<{ customerServiceMessages: HelpDeskMessage[] }>()
);

export const loadCustomerServiceMessagesFailure = createAction(
  '[HelpDesk/CustomerService API] Get customer service messages FAILURE',
  props<{ error: string }>()
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

export const archiveHelpDeskChatSuccess = createAction(
  '[HelpDesk/Inbox API] Archive help desk chat SUCCESS',
  props<{ helpDeskChat: HelpDeskChat }>()
);

export const archiveHelpDeskChatFailure = createAction(
  '[HelpDesk/Inbox API] Archive help desk chat FAILURE',
  props<{ error: string }>()
);

export const helpDeskChatReplySuccess = createAction(
  '[HelpDesk/Inbox API] Reply help desk chat SUCCESS',
  props<{ helpDeskChat: HelpDeskChat }>()
);

export const helpDeskChatReplyFailure = createAction(
  '[HelpDesk/Inbox API] Reply help desk chat FAILURE',
  props<{ error: string }>()
);
