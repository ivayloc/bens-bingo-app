import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getBingoGames } from 'src/app/home/state';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { NavigationItem } from 'src/app/shared/models/navigation-item';
import { SlotsGame } from 'src/app/shared/models/slots-game';
import { CasinoGameCategory } from '../../models/casino-game-category';
import { CasinoService } from '../../services/casino.service';
import {
  getHotSlotsGames,
  getJackpotGames,
  getNewReleasesGames,
  getSlotsGames,
  State,
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
  getHotSlotsGames$ = new Observable<SlotsGame[]>();
  getNewReleasesGames$ = new Observable<SlotsGame[]>();
  getJackpotGames$ = new Observable<SlotsGame[]>();

  constructor(
    private store: Store<State>,
    private casinoService: CasinoService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CasinoPageActions.loadCasinoDetails());
    this.getHotSlotsGames$ = this.store.select(getHotSlotsGames);
    this.getNewReleasesGames$ = this.store.select(getNewReleasesGames);
    this.getJackpotGames$ = this.store.select(getJackpotGames);
  }
}
