import { createAction, props } from '@ngrx/store';
import { HelpDeskReply } from '../../models/help-desk-reply';

export const loadInboxMessages = createAction(
  '[Help Desk/Inbox] Load inbox messages'
);

export const loadOutboxMessages = createAction(
  '[Help Desk/Outbox] Load outbox messages'
);

export const loadArchivedMessages = createAction(
  '[Help Desk/Archived] Load archived messages'
);

export const loadCustomerServiceMessages = createAction(
  '[Help Desk/CustomerService] Load customer service messages'
);

export const loadHelpDeskChat = createAction(
  '[Help Desk/Inbox] Load help desk chat',
  props<{ id: number; isFromAdmin: boolean }>()
);

export const archiveHelpDeskChat = createAction(
  '[Help Desk/Inbox] Archive help desk chat',
  props<{ id: number }>()
);

export const helpDeskChatReply = createAction(
  '[Help Desk/Inbox] Reply help desk chat',
  props<{ payload: HelpDeskReply }>()
);

export const saveInLocalStorage = createAction(
  '[Help Desk] Save in localStorage',
  props<{ payload: any }>()
);
