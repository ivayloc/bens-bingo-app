export interface DepositSubmitResponse {
  transactionId: number;
  message: string;
  shortName: string;
  successful: boolean;
  amount: number;
  currency: string;
  sourceamount?: any;
  sourcecurrency?: any;
  psp_res: {
    code: number;
    message: string;
  };
  ecomTransactionId: number;
  trackId: string;
}
