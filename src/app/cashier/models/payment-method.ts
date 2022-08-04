import { PaymentMethodAccount } from './payment-method-account';
import { PaymentMethodAmounts } from './payment-method-amounts';
import { PaymentMethodDetails } from './payment-method-details';

export interface PaymentMethod {
  accounts?: PaymentMethodAccount[];
  amounts?: PaymentMethodAmounts;
  default?: number;
  description: string;
  details: PaymentMethodDetails;
  id: number;
  image: string;
  name: string;
  requiresaccount: boolean;
}
