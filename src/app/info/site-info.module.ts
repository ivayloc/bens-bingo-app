import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { SiteInfoRoutingModule } from './site-info-routing.module';
import { SiteInfoEffects } from './state/site-info.effects';
import { siteInfoReducer } from './state/site-info.reducers';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoadPageContentComponent } from './components/load-page-content/load-page-content.component';

@NgModule({
  declarations: [TermsAndConditionsComponent, AboutUsComponent, LoadPageContentComponent],
  imports: [
    CommonModule,
    SiteInfoRoutingModule,
    SharedModule,
    StoreModule.forFeature('site-info', siteInfoReducer),
    EffectsModule.forFeature([SiteInfoEffects]),
  ],
})
export class SiteInfoModule {}
