export interface DepositReceipt {
  amount: number;
  totalCash: number;
  currency: string;
  date: Date;
  status: string;
  trackId: string;
  transactionId: number;
}
