import { BingoGame } from '../../shared/models/bingo-game';
import { Jackpot } from './jackpots';
import { RecentWinners } from '../../shared/models/recent-winners';
import { SlotsGame } from '../../shared/models/slots-game';
import { Game } from 'src/app/shared/models/game';

export interface HomeDetails {
  bingoGames: BingoGame[];
  slotsGames: Game[];
  newGames?: any[];
  jackpots: Jackpot[];
  recentWinners: RecentWinners[];
}
