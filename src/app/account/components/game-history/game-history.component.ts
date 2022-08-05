import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { GameHistory } from '../../models/game-history';
import { GameType } from '../../models/game-type';
import { getBingoHistory as getGameHistory, State } from '../../state';
import { AccountPageActions } from '../../state/actions';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.scss'],
})
export class GameHistoryComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;

  public get gameTypeFieldValue(): keyof typeof GameType {
    return this.searchGameHistoryForm.get('gametype')?.value;
  }

  searchGameHistoryForm = this.fb.group({
    startdate: new Date('2022-04-01T21:00:00.000Z'),
    enddate: new Date('2022-06-27T21:00:00.000Z'),
    gametype: ['', Validators.required],
  });

  showTable = false;
  gameType = GameType;
  displayedColumns = [''];

  private displayedColumnsGames = [
    'gameid',
    // 'currency',
    'gamename',
    'start_time',
    // 'gameprice',
    'price',
    'bet',
    'prize',
  ];
  private displayedColumnsBingo = [
    'gameid',
    'gamename',
    'start_time',
    'gameprice',
    'price',
    // 'currency',
    'cards_purchased',
    'usersprize',
  ];

  getGamesHistory$ = new Observable<MatTableDataSource<GameHistory>>();

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getGamesHistory$ = this.store.select(getGameHistory).pipe(
      map((matTableDataSource) => {
        matTableDataSource.sort = this.sort;
        return matTableDataSource;
      })
    );
  }

  getGameHistory() {
    if (this.searchGameHistoryForm.invalid) {
      return;
    }
    if (this.gameTypeFieldValue === GameType.bingo) {
      this.displayedColumns = this.displayedColumnsBingo;
    } else {
      this.displayedColumns = this.displayedColumnsGames;
    }
    this.store.dispatch(
      AccountPageActions.loadGameHistory({
        payload: this.searchGameHistoryForm.value,
      })
    );
    this.showTable = true;
  }
}
