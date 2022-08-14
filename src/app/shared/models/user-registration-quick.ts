import { UserSubscription } from 'src/app/account/models/user-subscription';

export interface UserRegistrationQuick {
  accounttype: string;
  legalage: boolean;
  signuptype: string;
  subid: string;
  subscription: UserSubscription;
  terms: boolean;
  userdata: {
    alias: string;
    currency: string;
    email: string;
    language: string;
    mobilephone: string;
    password: string;
  };
}
