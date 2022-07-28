import { UserProfileDetails } from './user-profile-details';

export interface UserProfile<T = UserProfileDetails> {
  profile: T;
  bday: string;
  isBday: boolean;
  isAnniversary: boolean;
}
