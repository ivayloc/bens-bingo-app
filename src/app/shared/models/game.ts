import { BingoGame } from './bingo-game';
import { SlotsGame } from './slots-game';

export interface Game extends BingoGame, SlotsGame {
  name: string;
  skinbase: string;
  type: string;
  sortOrder: number;
  provider: string;
  tileUrl: string;
  launchUrl: string;
}
