import { Game } from 'src/app/shared/models/game';
import { BingoGame } from '../../shared/models/bingo-game';

export interface HomeDetails {
  bingoGames: BingoGame[];
  slotsGames: Game[];
  newGames?: any[];
}
