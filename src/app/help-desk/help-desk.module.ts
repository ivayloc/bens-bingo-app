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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { helpDeskReducer } from './state/help-desk.reducers';
import { HelpDeskEffects } from './state/help-desk.effects';
import { HelpDeskMessageComponent } from './components/help-desk-message/help-desk-message.component';

@NgModule({
  declarations: [
    HelpDeskLayoutComponent,
    NewTicketComponent,
    FaqComponent,
    CustomerServiceComponent,
    InboxComponent,
    SentComponent,
    ArchivedComponent,
    HelpDeskMessageComponent,
  ],
  imports: [CommonModule, HelpRoutingModule, SharedModule,
    StoreModule.forFeature('help-desk', helpDeskReducer),
    EffectsModule.forFeature([HelpDeskEffects]),

  ],
})
export class HelpModule { }
