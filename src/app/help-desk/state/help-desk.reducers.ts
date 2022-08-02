import { createReducer, on } from '@ngrx/store';
import { HelpDeskChat } from '../models/help-desk-chat';
import { HelpDeskMessage } from '../models/help-desk-message';
import { HelpDeskApiActions } from './actions';

export interface HelpDeskState {
  inboxMessages: HelpDeskMessage[];
  outboxMessages: HelpDeskMessage[];
  archivedMessages: HelpDeskMessage[];
  customerServiceMessages: HelpDeskMessage[];
  isFromAdmin: boolean;
  helpDeskChat: HelpDeskChat;
  error: any;
}

const initialState: HelpDeskState = {
  inboxMessages: [],
  outboxMessages: [],
  archivedMessages: [],
  customerServiceMessages: [],
  isFromAdmin: false,
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
        isFromAdmin: false,
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
  ),
  on(
    HelpDeskApiActions.helpDeskChatReplySuccess,
    (state, { helpDeskChat }): HelpDeskState => {
      return {
        ...state,
        helpDeskChat,
        error: '',
      };
    }
  ),
  on(
    HelpDeskApiActions.helpDeskChatReplyFailure,
    (state, action): HelpDeskState => {
      return {
        ...state,
        helpDeskChat: {} as HelpDeskChat,
        error: action.error,
      };
    }
  ),
  on(
    HelpDeskApiActions.loadOutboxMessagesSuccess,
    (state, { outboxMessages }): HelpDeskState => {
      return {
        ...state,
        outboxMessages,
        isFromAdmin: false,
        error: '',
      };
    }
  ),
  on(
    HelpDeskApiActions.loadOutboxMessagesFailure,
    (state, action): HelpDeskState => {
      return {
        ...state,
        outboxMessages: [],
        error: action.error,
      };
    }
  ),
  on(
    HelpDeskApiActions.loadArchivedMessagesSuccess,
    (state, { archivedMessages }): HelpDeskState => {
      return {
        ...state,
        archivedMessages,
        isFromAdmin: false,
        error: '',
      };
    }
  ),
  on(
    HelpDeskApiActions.loadArchivedMessagesFailure,
    (state, action): HelpDeskState => {
      return {
        ...state,
        archivedMessages: [],
        error: action.error,
      };
    }
  ),
  on(
    HelpDeskApiActions.loadCustomerServiceMessagesSuccess,
    (state, { customerServiceMessages }): HelpDeskState => {
      return {
        ...state,
        customerServiceMessages,
        isFromAdmin: true,
        error: '',
      };
    }
  ),
  on(
    HelpDeskApiActions.loadCustomerServiceMessagesFailure,
    (state, action): HelpDeskState => {
      return {
        ...state,
        customerServiceMessages: [],
        error: action.error,
      };
    }
  )
);
