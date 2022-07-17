export interface Transaction {
  id: number;
  transactionid: number;
  amount: number;
  method: string;
  type: string;
  action: string;
  result: string;
  merchant_transactionid: string;
  currency: string;
  date: string;
}
