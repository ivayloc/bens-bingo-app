import { createReducer, on } from '@ngrx/store';
import { HelpDeskQuestion } from 'src/app/help-desk/models/help-desk-question';
import { HelpDeskChat } from '../models/help-desk-chat';
import { HelpDeskMessage } from '../models/help-desk-message';
import { HelpDeskApiActions } from './actions';

export interface HelpDeskState {
  archivedMessages: HelpDeskMessage[];
  customerServiceMessages: HelpDeskMessage[];
  faq: string;
  helpDeskChat: HelpDeskChat;
  helpDeskMessageAttachments: string[];
  helpDeskQuestions: HelpDeskQuestion[];
  inboxMessages: HelpDeskMessage[];
  outboxMessages: HelpDeskMessage[];
  submittedQuestionId: number;
  error: any;
}

const initialState: HelpDeskState = {
  archivedMessages: [],
  customerServiceMessages: [],
  error: {},
  helpDeskChat: {} as HelpDeskChat,
  helpDeskMessageAttachments: [],
  helpDeskQuestions: [],
  inboxMessages: [],
  outboxMessages: [],
  submittedQuestionId: 0,
  faq: '',
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
  ),
  on(
    HelpDeskApiActions.submitNewQuestionSuccess,
    (state, { submittedQuestionId }): HelpDeskState => {
      return {
        ...state,
        submittedQuestionId,
        error: '',
      };
    }
  ),
  on(
    HelpDeskApiActions.submitNewQuestionFailure,
    (state, action): HelpDeskState => {
      return {
        ...state,
        submittedQuestionId: 0,
        error: action.error,
      };
    }
  ),
  on(
    HelpDeskApiActions.loadHelpDeskMessageAttachmentSuccess,
    (state, { attachment }): HelpDeskState => {
      return {
        ...state,
        helpDeskMessageAttachments: [
          ...state.helpDeskMessageAttachments,
          attachment,
        ],
        error: '',
      };
    }
  ),
  on(
    HelpDeskApiActions.loadHelpDeskMessageAttachmentFailure,
    (state, action): HelpDeskState => {
      return {
        ...state,
        helpDeskMessageAttachments: [],
        error: action.error,
      };
    }
  ),
  on(
    HelpDeskApiActions.loadFaqContentSuccess,
    (state, { faq }): HelpDeskState => {
      return {
        ...state,
        faq,
        error: '',
      };
    }
  ),
  on(
    HelpDeskApiActions.loadFaqContentFailure,
    (state, action): HelpDeskState => {
      return {
        ...state,
        faq: '',
        error: action.error,
      };
    }
  )
);
