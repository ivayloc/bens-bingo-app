import { UserBalance } from '../../account/models/user-balance';
import { UserCurrency } from '../../account/models/user-currency';
import { UserEmail } from '../../account/models/user-email';
import { UserPhoneNumber } from '../../account/models/user-phone-numbe';
import { UserSubscription } from '../../account/models/user-subscription';
import { UserVip } from '../../account/models/user-vip';

export interface UserInfo {
  address: string;
  address2: string;
  alias: string;
  balance: UserBalance;
  birthdate: string;
  city: string;
  country: string;
  created: string;
  currency: UserCurrency;
  email: UserEmail;
  firstname: string;
  gender: string;
  lastname: string;
  phoneNumbers: UserPhoneNumber[];
  state: string;
  subscription: UserSubscription;
  userid: number;
  vip: UserVip;
  zip: string;
}
