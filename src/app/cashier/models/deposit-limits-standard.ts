export interface DepositLimitsStandard {
  id: number;
  velocitytype: string;
  value: number;
  currency?: string;
  applied_by: string;
  numdays: number;
}
