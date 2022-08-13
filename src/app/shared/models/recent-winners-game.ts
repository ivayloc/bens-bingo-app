import { RecentWinnersGameType } from './recent-winners-game-type';

export interface RecentWinnersGame {
  name: string;
  id: number;
  prize: number;
  currency: string;
  gametype: RecentWinnersGameType;
}
