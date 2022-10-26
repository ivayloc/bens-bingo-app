import { PaymentMethodAccount } from '../../deposit/models/payment-method-account';
import { PaymentMethodAmounts } from '../../deposit/models/payment-method-amounts';
import { PaymentMethodDetails } from '../../deposit/models/payment-method-details';
import { PaymentMethodTypes } from './payment-method-types';

export interface PaymentMethod {
  accounts?: PaymentMethodAccount[];
  account: {
    params: Record<string, string | boolean | number>;
  };
  amounts?: PaymentMethodAmounts;
  default?: number;
  account_type?: PaymentMethodTypes;
  description: string;
  details: PaymentMethodDetails[];
  id: number;
  image: string;
  name: string;
  requiresaccount: boolean;
}
