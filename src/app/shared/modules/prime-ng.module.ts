import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BlockUIModule } from 'primeng/blockui';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ScrollPanelModule, BlockUIModule],
})
export class PrimeNgModule {}
