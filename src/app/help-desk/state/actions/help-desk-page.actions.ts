import { createAction, props } from '@ngrx/store';

export const loadInboxMessages = createAction(
  '[Help Desk/Inbox] Load inbox messages'
);

export const loadSelectedInboxMessage = createAction(
  '[Help Desk/Inbox] Load inbox message',
  props<{ id: number }>()
);
