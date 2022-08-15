import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from 'src/app/shared/models/game';
import { CasinoService } from 'src/app/shared/services/casino.service';
import { CasinoGameCategory } from '../../models/casino-game-category';
import {
  getHotSlotsGames,
  getJackpotGames,
  getNewReleasesGames,
} from '../../state';
import { CasinoPageActions } from '../../state/actions';

@Component({
  selector: 'app-casino-shell',
  templateUrl: './casino-shell.component.html',
  styleUrls: ['./casino-shell.component.scss'],
})
export class CasinoShellComponent implements OnInit {
  navigationLinks = this.casinoService.navigationLinks;
  slotsCategories = CasinoGameCategory;
  // getNewGames$ = new Observable<Game[]>();
  getHotSlotsGames$ = new Observable<Game[]>();
  getNewReleasesGames$ = new Observable<Game[]>();
  getJackpotGames$ = new Observable<Game[]>();

  constructor(private store: Store, private casinoService: CasinoService) {}

  ngOnInit(): void {
    this.store.dispatch(CasinoPageActions.loadCasinoDetails());
    // this.getNewGames$ = this.store.select(getNewGames);
    this.getHotSlotsGames$ = this.store.select(getHotSlotsGames);
    this.getNewReleasesGames$ = this.store.select(getNewReleasesGames);
    this.getJackpotGames$ = this.store.select(getJackpotGames);
  }
}
