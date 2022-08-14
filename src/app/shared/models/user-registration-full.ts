import { UserSubscription } from 'src/app/account/models/user-subscription';

export interface UserRegistrationFull {
  accounttype: string;
  couponcode: string;
  legalage: boolean;
  referral: string;
  signuptype: string;
  sourceid: number;
  subid: string;
  subscription: UserSubscription;
  terms: boolean;
  userdata: {
    address: string;
    address2: string;
    alias: string;
    bday: string;
    city: string;
    country: string;
    currency: string;
    email: string;
    firstname: string;
    gender: string;
    language: string;
    lastname: string;
    mobilephone: string;
    password: string;
    passwordhint: string;
    phone: string;
    state: string;
    username: string;
    zip: string;
  };
}
