import { BingoGame } from './bingo-game';
import { SlotsGame } from './slots-game';

export interface Game extends BingoGame, SlotsGame {
  type: 'casino' | 'bingo';
}
