export interface HelpDeskMessage {
    id: number;
    subject: string;
    date: string;
    viewed: boolean;
    closed: boolean;
    allow_reply: boolean;
}
