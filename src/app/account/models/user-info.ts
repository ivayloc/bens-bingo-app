import { UserBalance } from './user-balance';
import { UserCurrency } from './user-currency';
import { UserEmail } from './user-email';
import { UserPhoneNumber } from './user-phone-numbe';
import { UserSubscription } from './user-subscription';
import { UserVip } from './user-vip';

export interface UserInfo {
  userid: number;
  alias: string;
  firstname: string;
  lastname: string;
  gender: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  email: UserEmail;
  birthdate: string;
  subscription: UserSubscription;
  created: string;
  phoneNumbers: UserPhoneNumber[];
  balance: UserBalance;
  currency: UserCurrency;
  vip: UserVip;
}
