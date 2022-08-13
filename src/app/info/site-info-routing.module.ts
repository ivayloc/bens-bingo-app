import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadPageContentComponent } from './components/load-page-content/load-page-content.component';

const routes: Routes = [
  {
    path: 'terms',
    data: {
      page: 'terms',
    },
    component: LoadPageContentComponent,
  },
  {
    path: 'about-us',
    data: {
      page: 'about',
    },
    component: LoadPageContentComponent,
  },
  {
    path: 'privacy-policy',
    data: {
      page: 'privacy',
    },
    component: LoadPageContentComponent,
  },
  {
    path: 'responsible-gaming',
    data: {
      page: 'responsiblegaming',
    },
    component: LoadPageContentComponent,
  },
  {
    path: 'security',
    data: {
      page: 'security',
    },
    component: LoadPageContentComponent,
  },
  {
    path: 'fair-play',
    data: {
      page: 'security',
    },
    component: LoadPageContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteInfoRoutingModule {}
