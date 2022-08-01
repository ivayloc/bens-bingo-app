import { createReducer, on } from '@ngrx/store';
import { HelpDeskChat } from '../models/help-desk-chat';
import { HelpDeskMessage } from '../models/help-desk-message';
import { HelpDeskApiActions } from './actions';

export interface HelpDeskState {
  inboxMessages: HelpDeskMessage[];
  helpDeskChat: HelpDeskChat;
  error: any;
}

const initialState: HelpDeskState = {
  inboxMessages: [],
  helpDeskChat: {} as HelpDeskChat,
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
    HelpDeskApiActions.loadHelpDeskChatSuccess,
    (state, { helpDeskChat }): HelpDeskState => {
      return {
        ...state,
        helpDeskChat,
        error: '',
      };
    }
  ),
  on(
    HelpDeskApiActions.loadHelpDeskChatFailure,
    (state, action): HelpDeskState => {
      return {
        ...state,
        helpDeskChat: {} as HelpDeskChat,
        error: action.error,
      };
    }
  )
);
