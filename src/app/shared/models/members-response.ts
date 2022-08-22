import { Member } from './member';

export interface MembersResponse {
  currentItemCount: number;
  itemsPerPage: number;
  startIndex: number;
  totalItems: number;
  pageIndex: number;
  totalPages: number;
  items: Member[];
}
