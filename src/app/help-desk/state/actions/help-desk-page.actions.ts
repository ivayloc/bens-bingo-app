import { createAction, props } from '@ngrx/store';
import { HelpDeskChatFeedbackRequest } from '../../models/help-desk-chat-feedback-request';
import { HelpDeskMessageAttachment } from '../../models/help-desk-message-attachment';
import { HelpDeskNewTicket } from '../../models/help-desk-new-ticket';
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

export const deleteHelpDeskChat = createAction(
  '[HelpDesk/CustomerService] Delete help desk chat',
  props<{ id: number }>()
);

export const hideHelpDeskChat = createAction(
  '[HelpDesk/Archive] Hide help desk chat',
  props<{ id: number }>()
);

export const helpDeskChatReply = createAction(
  '[HelpDesk/Inbox] Reply help desk chat',
  props<{ payload: HelpDeskReply }>()
);

export const sendHelpDeskChatFeedback = createAction(
  '[HelpDesk/Inbox] Send help desk chat feedback',
  props<{ payload: HelpDeskChatFeedbackRequest }>()
);

export const loadHelpDeskMessageAttachment = createAction(
  '[HelpDesk/Inbox] Get help desk message attachment',
  props<{ payload: HelpDeskMessageAttachment }>()
);

export const saveInLocalStorage = createAction(
  '[Help Desk] Save in localStorage',
  props<{ payload: any }>()
);

export const loadHelpDeskQuestions = createAction(
  '[HelpDesk/NewTicket] Load help desk questions'
);

export const submitNewQuestion = createAction(
  '[HelpDesk/NewTicket] Submit new question',
  props<{ id: number }>()
);

export const createNewTicket = createAction(
  '[HelpDesk/NewTicket] Create new ticket',
  props<{ payload: HelpDeskNewTicket }>()
);
