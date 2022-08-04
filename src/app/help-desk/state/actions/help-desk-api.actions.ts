import { createAction, props } from '@ngrx/store';
import { HelpDeskQuestion } from 'src/app/help-desk/models/help-desk-question';
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

export const setHelpDeskChatViewedSuccess = createAction(
  '[HelpDesk/Inbox API] Set help desk chat as viewed SUCCESS'
);

export const setHelpDeskChatViewedFailure = createAction(
  '[HelpDesk/Inbox API] Set help desk chat as viewed FAILURE',
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

export const sendHelpDeskChatFeedbackSuccess = createAction(
  '[HelpDesk/Inbox API] Send help desk chat feedback SUCCESS'
);

export const sendHelpDeskChatFeedbackFailure = createAction(
  '[HelpDesk/Inbox API] Send help desk chat feedback FAILURE',
  props<{ error: string }>()
);

export const loadHelpDeskQuestionsSuccess = createAction(
  '[HelpDesk/Inbox API] Get help desk questions SUCCESS',
  props<{ helpDeskQuestions: HelpDeskQuestion[] }>()
);

export const loadHelpDeskQuestionsFailure = createAction(
  '[HelpDesk/Inbox API] Get help desk questions FAILURE',
  props<{ error: string }>()
);

export const submitNewQuestionSuccess = createAction(
  '[HelpDesk/NewTicket API] Submit new question SUCCESS',
  props<{ submittedQuestionId: number }>()
);

export const submitNewQuestionFailure = createAction(
  '[HelpDesk/NewTicket API] Submit new question FAILURE',
  props<{ error: string }>()
);

export const createNewTicketSuccess = createAction(
  '[HelpDesk/NewTicket API] Create new ticket SUCCESS',
  props<{ newTicketId: number }>()
);

export const createNewTicketFailure = createAction(
  '[HelpDesk/NewTicket API] Create new ticket FAILURE',
  props<{ error: string }>()
);

export const loadHelpDeskMessageAttachmentSuccess = createAction(
  '[HelpDesk/Inbox API] Get help desk message attachment SUCCESS',
  props<{ attachment: string }>()
);

export const loadHelpDeskMessageAttachmentFailure = createAction(
  '[HelpDesk/Inbox API] Get help desk message attachment FAILURE',
  props<{ error: string }>()
);
