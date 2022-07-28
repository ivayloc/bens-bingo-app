import { Friend } from './friend';

export interface FriendsList {
  pendingFriends: Friend[];
  pendingOutgoing: Friend[];
  friends: Friend[];
}
