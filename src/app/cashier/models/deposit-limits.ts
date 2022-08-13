import { DepositLimitsGlobalEntries } from './deposit-limits-global-entries';
import { DepositLimitsPlayerEntries } from './deposit-limits-player-entries';

export interface DepositLimits {
  globalEntries: DepositLimitsGlobalEntries;
  playerEntries: DepositLimitsPlayerEntries;
}
