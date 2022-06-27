import { CasinoGameCategories } from './casino-game-categories';

export type GameCategoriesNames = {
  [key in CasinoGameCategories]: string;
};
