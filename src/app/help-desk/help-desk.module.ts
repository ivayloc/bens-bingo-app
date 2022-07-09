import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-desk-routing.module';
import { HelpDeskLayoutComponent } from './components/help-desk-layout/help-desk-layout.component';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { FaqComponent } from './components/faq/faq.component';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { SentComponent } from './components/sent/sent.component';
import { ArchivedComponent } from './components/archived/archived.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HelpDeskLayoutComponent,
    NewTicketComponent,
    FaqComponent,
    CustomerServiceComponent,
    InboxComponent,
    SentComponent,
    ArchivedComponent,
  ],
  imports: [CommonModule, HelpRoutingModule, SharedModule],
})
export class HelpModule {}
