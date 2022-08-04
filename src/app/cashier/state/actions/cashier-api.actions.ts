import { createAction, props } from '@ngrx/store';
import { PaymentMethod } from '../../models/payment-method';

export const loadPaymentMethodsSuccess = createAction(
  '[Cashier/Deposits API] Load payment methods Success',
  props<{ paymentMethods: PaymentMethod[] }>()
);

export const loadPaymentMethodsFailure = createAction(
  '[Cashier/Deposits API] Load payment methods Failure',
  props<{ error: string }>()
);
