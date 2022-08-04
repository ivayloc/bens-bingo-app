export interface PaymentMethodAccount {
  id: number;
  nameoncard: string;
  expmonth: number;
  expyear: number;
  frommonth: number;
  fromyear: number;
  issue: number;
  masked_accountnumber: string;
}
