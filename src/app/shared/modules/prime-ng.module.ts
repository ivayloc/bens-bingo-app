import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CarouselModule } from 'primeng/carousel';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CarouselModule, ScrollPanelModule],
})
export class PrimeNgModule {}
