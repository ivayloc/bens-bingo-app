import { Component, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/shared/models/navigation-item';

@Component({
  selector: 'app-help-desk-layout',
  templateUrl: './help-desk-layout.component.html',
  styleUrls: ['./help-desk-layout.component.scss'],
})
export class HelpDeskLayoutComponent implements OnInit {
  navigationLinks: NavigationItem[] = [
    { url: '/help-desk/new-ticket', title: 'Ask a Question' },
    { url: '/help-desk/faq', title: 'FAQ' },
    { url: '/help-desk/customer-service', title: 'Customer Service' },
    { url: '/help-desk/inbox', title: 'Inbox' },
    { url: '/help-desk/sent', title: 'Outbox' },
    { url: '/help-desk/archived', title: 'Archived' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
