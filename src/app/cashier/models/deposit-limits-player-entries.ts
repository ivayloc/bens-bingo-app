import { DepositLimitsDuration } from './deposit-limits-duration';
import { DepositLimitsStandard } from './deposit-limits-standard';

export interface DepositLimitsPlayerEntries {
  duration: DepositLimitsDuration[];
  standard: DepositLimitsStandard[];
}
