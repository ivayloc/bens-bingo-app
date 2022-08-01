import { HelpDeskChatMessage } from './help-desk-chat-message';

export interface HelpDeskChat {
  allow_reply: boolean;
  closed: boolean;
  id: number;
  items: HelpDeskChatMessage[];
  section: string;
  subject: string;
}
