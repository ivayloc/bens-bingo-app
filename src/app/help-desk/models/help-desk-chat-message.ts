import { HelpDeskMessageAttachment } from './help-desk-message-attachment';

export interface HelpDeskChatMessage {
  id: number;
  date: string;
  body: string;
  viewed: boolean;
  num_attachments: number;
  attachments: HelpDeskMessageAttachment[];
  user: boolean;
}
