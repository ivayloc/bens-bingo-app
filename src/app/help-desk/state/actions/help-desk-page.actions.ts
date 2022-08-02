import { createAction, props } from '@ngrx/store';
import { HelpDeskReply } from '../../models/help-desk-reply';

export const loadInboxMessages = createAction(
  '[HelpDesk/Inbox] Load inbox messages'
);

export const loadOutboxMessages = createAction(
  '[HelpDesk/Outbox] Load outbox messages'
);

export const loadArchivedMessages = createAction(
  '[HelpDesk/Archived] Load archived messages'
);

export const loadCustomerServiceMessages = createAction(
  '[HelpDesk/CustomerService] Load customer service messages'
);

export const loadHelpDeskChat = createAction(
  '[HelpDesk/Inbox] Load help desk chat',
  props<{ id: number; isFromAdmin: boolean }>()
);

export const archiveHelpDeskChat = createAction(
  '[HelpDesk/Inbox] Archive help desk chat',
  props<{ id: number }>()
);

export const helpDeskChatReply = createAction(
  '[HelpDesk/Inbox] Reply help desk chat',
  props<{ payload: HelpDeskReply }>()
);

export const saveInLocalStorage = createAction(
  '[Help Desk] Save in localStorage',
  props<{ payload: any }>()
);

export const loadHelpDeskQuestions = createAction(
  '[HelpDesk/NewTicket] Load help desk questions'
);
