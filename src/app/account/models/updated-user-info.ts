import { UserSubscription } from './user-subscription';

export interface UpdatedUserInfo {
  userdata: {
    address: string;
    address2: string;
    bday: string;
    city: string;
    country: string;
    firstname: string;
    gender: string;
    lastname: string;
    mobilephone: string;
    passwordhint: string;
    phone: string;
    state: string;
    zip: string;
  };
  subscription?: UserSubscription;
  signuptype: string;
}
