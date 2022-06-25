import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BingoGame } from 'src/app/shared/models/bingo-game';

@Injectable({
  providedIn: 'root',
})
export class BingoService {
  constructor(private http: HttpClient) {}

  getBingoGames(): Observable<BingoGame[]> {
    return this.http.get<BingoGame[]>('/assets/mock/bingo-games.json');
  }
}
