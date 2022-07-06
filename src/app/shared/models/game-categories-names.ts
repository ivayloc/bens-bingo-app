import { CasinoGameCategories } from '../../casino/models/casino-game-categories';

export type GameCategoriesNames = {
  [key in CasinoGameCategories]: string;
};
