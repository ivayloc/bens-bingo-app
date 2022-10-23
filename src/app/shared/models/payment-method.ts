import { PaymentMethodAccount } from '../../deposit/models/payment-method-account';
import { PaymentMethodAmounts } from '../../deposit/models/payment-method-amounts';
import { PaymentMethodDetails } from '../../deposit/models/payment-method-details';

export interface PaymentMethod {
  accounts?: PaymentMethodAccount[];
  amounts?: PaymentMethodAmounts;
  default?: number;
  description: string;
  details: PaymentMethodDetails[];
  id: number;
  image: string;
  name: string;
  requiresaccount: boolean;
}
