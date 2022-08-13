import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Jackpot } from '../../models/jackpots';
import { selectJackpot } from '../../state';
import { HomePageActions } from '../../state/actions';

@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.scss'],
})
export class JackpotComponent implements OnInit {
  getJackpots$ = new Observable<Jackpot[]>();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(HomePageActions.loadJackpots());

    this.getJackpots$ = this.store.select(selectJackpot);
  }
}
