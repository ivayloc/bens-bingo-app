export interface DepositAddAccountRequest {
  nameoncard: string;
  accountnumber: string;
  expmonth: number;
  expyear: number;
  issue: number;
  paymentmethodid: number;
}
