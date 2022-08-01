import { createReducer, on } from '@ngrx/store';
import { HelpDeskChat } from '../models/help-desk-chat';
import { HelpDeskMessage } from '../models/help-desk-message';
import { HelpDeskApiActions } from './actions';

export interface HelpDeskState {
  inboxMessages: HelpDeskMessage[];
  selectedInboxMessage: HelpDeskChat;
  error: any;
}

const initialState: HelpDeskState = {
  inboxMessages: [],
  selectedInboxMessage: {} as HelpDeskChat,
  error: {},
};

export const helpDeskReducer = createReducer<HelpDeskState>(
  initialState,
  on(
    HelpDeskApiActions.loadInboxMessagesSuccess,
    (state, { inboxMessages }): HelpDeskState => {
      return {
        ...state,
        inboxMessages,
        error: '',
      };
    }
  ),
  on(
    HelpDeskApiActions.loadInboxMessagesFailure,
    (state, action): HelpDeskState => {
      return {
        ...state,
        inboxMessages: [],
        error: action.error,
      };
    }
  ),
  on(
    HelpDeskApiActions.loadSelectedInboxMessageSuccess,
    (state, { selectedInboxMessage }): HelpDeskState => {
      return {
        ...state,
        selectedInboxMessage,
        error: '',
      };
    }
  ),
  on(
    HelpDeskApiActions.loadSelectedInboxMessageFailure,
    (state, action): HelpDeskState => {
      return {
        ...state,
        selectedInboxMessage: {} as HelpDeskChat,
        error: action.error,
      };
    }
  )
);
