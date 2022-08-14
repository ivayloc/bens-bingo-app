import { Jackpot } from 'src/app/home/models/jackpots';
import { Game } from 'src/app/shared/models/game';

export interface Top5Games {
  newestGames: Game[];
  mostPlayedGames: Game[];
  jackpots: Jackpot[];
}
