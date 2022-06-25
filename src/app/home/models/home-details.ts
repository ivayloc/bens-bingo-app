import { BingoGame } from '../../shared/models/bingo-game';
import { Jackpot } from './jackpots';
import { RecentWinners } from './recent-winners';
import { SlotsGame } from './slots-game';

export interface HomeDetails {
  bingoGames: BingoGame[];
  slotsGames: SlotsGame[];
  newGames?: any[];
  jackpots: Jackpot[];
  recentWinners: RecentWinners[];
}
