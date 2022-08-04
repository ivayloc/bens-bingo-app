import { HelpDeskChatMessage } from './help-desk-chat-message';
import { HelpDeskChatRating } from './help-desk-chat-rating';

export interface HelpDeskChat {
  allow_reply: boolean;
  closed: boolean;
  id: number;
  items: HelpDeskChatMessage[];
  rating?: HelpDeskChatRating;
  section: string;
  subject: string;
}
