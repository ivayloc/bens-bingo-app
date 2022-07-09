import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { InfoRoutingModule } from './info-routing.module';
import { SiteInfoEffects } from './state/info.effects';
import { siteInfoReducer } from './state/info.reducers';

@NgModule({
  declarations: [TermsAndConditionsComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    SharedModule,
    StoreModule.forFeature('site-info', siteInfoReducer),
    EffectsModule.forFeature([SiteInfoEffects]),
  ],
})
export class SiteInfoModule {}
