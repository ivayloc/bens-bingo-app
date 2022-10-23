export interface DepositUpdateAccountRequest {
  accountid: number;
  accountnumber: string;
  expmonth: number;
  expyear: number;
  issue: number;
  nameoncard: string;
  processorid: number;
}
