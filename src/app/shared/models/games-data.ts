import { Game } from './game';
import { GameGroup } from './game-group';

export interface GamesData {
  currentItemCount: number;
  itemsPerPage: number;
  startIndex: number;
  totalItems: number;
  pageIndex: number;
  totalPages: number;
  items: Game[];
  groups: GameGroup[];
}
