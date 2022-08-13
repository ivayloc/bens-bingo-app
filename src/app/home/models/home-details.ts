import { Game } from 'src/app/shared/models/game';
import { BingoGame } from '../../shared/models/bingo-game';
import { Jackpot } from './jackpots';

export interface HomeDetails {
  bingoGames: BingoGame[];
  slotsGames: Game[];
  newGames?: any[];
  jackpots: Jackpot[];
}
