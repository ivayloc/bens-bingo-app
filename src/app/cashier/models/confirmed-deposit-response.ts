export interface ConfirmedDepositResponse {
  id: number;
  amount: number;
  type: string;
  latest_result: string;
  details: {
    items: {
      id: number;
      amount: number;
      currency: string;
      result: string;
      action: string;
      date: Date;
    }[];
  };
}
