import { RecentWinners } from 'src/app/shared/models/recent-winners';
import { BingoGame } from 'src/app/shared/models/bingo-game';
import { ComingUp } from 'src/app/shared/models/coming-up';
import { ChatModerators } from './chat-moderators';

export interface BingoDetails {
  bingoGames: BingoGame[];
  chatModerators: ChatModerators[];
  comingUp: ComingUp[];
  recentWinners: RecentWinners[];
}
