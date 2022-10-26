export interface DepositAccountForm {
  action: string;
  method: string;
  items: { name: string; value: any }[];
}
