import { Component, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/shared/models/navigation-item';

@Component({
  selector: 'app-help-layout',
  templateUrl: './help-layout.component.html',
  styleUrls: ['./help-layout.component.scss'],
})
export class HelpLayoutComponent implements OnInit {
  navigationLinks: NavigationItem[] = [
    { url: '/help/new-ticket', title: 'Ask a Question' },
    { url: '/help/faq', title: 'FAQ' },
    { url: '/help/customer-service', title: 'Customer Service' },
    { url: '/help/inbox', title: 'Inbox' },
    { url: '/help/sent', title: 'Outbox' },
    { url: '/help/archived', title: 'Archived' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
