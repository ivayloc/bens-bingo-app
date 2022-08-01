import { createAction, props } from '@ngrx/store';
import { HelpDeskReply } from '../../models/help-desk-reply';

export const loadInboxMessages = createAction(
  '[Help Desk/Inbox] Load inbox messages'
);

export const loadHelpDeskChat = createAction(
  '[Help Desk/Inbox] Load help desk chat',
  props<{ id: number }>()
);

export const archiveHelpDeskChat = createAction(
  '[Help Desk/Inbox] Archive help desk chat',
  props<{ id: number }>()
);

export const helpDeskChatReply = createAction(
  '[Help Desk/Inbox] Reply help desk chat',
  props<{ payload: HelpDeskReply }>()
);
