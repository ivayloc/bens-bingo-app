import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BingoRoutingModule } from './bingo-routing.module';
import { BingoShellComponent } from './components/bingo-shell/bingo-shell.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BingoShellComponent],
  imports: [CommonModule, BingoRoutingModule, SharedModule],
})
export class BingoModule {}
