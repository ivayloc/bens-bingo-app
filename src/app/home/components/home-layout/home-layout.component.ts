import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { getBingoGames, State } from '../../state';
import { HomePageActions } from '../../state/actions';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
  getBingoGames$ = new Observable<any[]>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(HomePageActions.loadBingoGames());

    this.getBingoGames$ = this.store.select(getBingoGames).pipe(
      tap((data) => {
        console.log(data);
      })
    );
  }
}
