import { Game } from 'src/app/shared/models/game';
import { SlotsGame } from 'src/app/shared/models/slots-game';

export interface CasinoDetails {
  newGames: Game[];
  slotsGames: Game[];
}
