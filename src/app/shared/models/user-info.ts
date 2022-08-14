import { UserBalance } from '../../account/models/user-balance';
import { UserCurrency } from '../../account/models/user-currency';
import { UserEmail } from '../../account/models/user-email';
import { UserPhoneNumber } from '../../account/models/user-phone-numbe';
import { UserSubscription } from '../../account/models/user-subscription';
import { UserVip } from '../../account/models/user-vip';

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
