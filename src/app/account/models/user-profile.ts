import { UserProfileDetails } from './user-profile-details';

export interface UserProfile {
  profile: UserProfileDetails;
  bday: string;
  isBday: boolean;
  isAnniversary: boolean;
}
