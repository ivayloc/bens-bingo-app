import { HelpDeskMessageAttachment } from './help-desk-message-attachment';

export interface HelpDeskMessage {
  allow_reply: boolean;
  closed: boolean;
  date: string;
  id: number;
  subject: string;
  viewed: boolean;
  attachments: HelpDeskMessageAttachment[];
}
