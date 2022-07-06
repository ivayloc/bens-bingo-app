import { Game } from './game';
import { GameGroup } from './game-group';

export interface GamesData {
  items: Game[];
  groups: GameGroup[];
}
