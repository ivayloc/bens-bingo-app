import { RecentWinnersGame } from './recent-winners-game';
import { RecentWinnersWinnings } from './recent-winners-winnings';

export interface RecentWinners {
  date: string;
  alias: string;
  game: RecentWinnersGame;
  betvalue: number;
  winnings: RecentWinnersWinnings;
}
