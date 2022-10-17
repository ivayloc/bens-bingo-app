export interface DepositAccount {
  transactionId: number;
  message: string;
  shortName: string;
  successful: boolean;
  amount: number;
  currency: string;
  psp_res: {
    code: number;
    message: string;
  };
  ecomTransactionId: number;
  trackId: string;
  transaction: {
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
  };
}
