import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BingoGameDetailsDialogComponent } from './shared/components/bingo-game-details-dialog/bingo-game-details-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bens-bingo-app';
  // games = [1, 2, 3, 4, 1, 2, 3, 4];
}
