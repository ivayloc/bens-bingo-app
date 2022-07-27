import { UserBalanceAmounts } from './user-balance-amounts';

export interface UserBalance {
  total: number;
  amounts: UserBalanceAmounts;
  cash: number;
}
