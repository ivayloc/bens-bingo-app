import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivedComponent } from './components/archived/archived.component';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { FaqComponent } from './components/faq/faq.component';
import { HelpDeskLayoutComponent } from './components/help-desk-layout/help-desk-layout.component';
import { HelpDeskMessageComponent } from './components/help-desk-message/help-desk-message.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { SentComponent } from './components/sent/sent.component';

const routes: Routes = [
  {
    path: '',
    component: HelpDeskLayoutComponent,
    children: [
      { path: '', redirectTo: 'new-ticket' },
      { path: 'new-ticket', component: NewTicketComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'customer-service', component: CustomerServiceComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'inbox/:id', component: HelpDeskMessageComponent },
      { path: 'sent', component: SentComponent },
      { path: 'archived', component: ArchivedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpRoutingModule {}
