import { createReducer, on } from '@ngrx/store';
import { HelpDeskQuestion } from 'src/app/help-desk/models/help-desk-question';
import { HelpDeskChat } from '../models/help-desk-chat';
import { HelpDeskMessage } from '../models/help-desk-message';
import { HelpDeskApiActions } from './actions';

export interface HelpDeskState {
  inboxMessages: HelpDeskMessage[];
  outboxMessages: HelpDeskMessage[];
  archivedMessages: HelpDeskMessage[];
  customerServiceMessages: HelpDeskMessage[];
  helpDeskChat: HelpDeskChat;
  helpDeskQuestions: HelpDeskQuestion[];
  error: any;
}

const initialState: HelpDeskState = {
  inboxMessages: [],
  outboxMessages: [],
  archivedMessages: [],
  customerServiceMessages: [],
  helpDeskChat: {} as HelpDeskChat,
  helpDeskQuestions: [],
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
  ),
  on(
    HelpDeskApiActions.loadHelpDeskQuestionsSuccess,
    (state, { helpDeskQuestions }): HelpDeskState => {
      return {
        ...state,
        helpDeskQuestions,
        error: '',
      };
    }
  ),
  on(
    HelpDeskApiActions.loadHelpDeskQuestionsFailure,
    (state, action): HelpDeskState => {
      return {
        ...state,
        helpDeskQuestions: [],
        error: action.error,
      };
    }
  )
);
