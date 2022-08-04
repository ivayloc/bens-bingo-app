import { createReducer } from '@ngrx/store';

export interface CashierState {
  error: string;
}

const initialState: CashierState = {
  error: '',
};

export const cashierReducer = createReducer<CashierState>(
  initialState
  // on(
  //   CashierApiActions.loadCashierDetailsSuccess,
  //   (state, action): CashierState => {
  //     return {
  //       ...state,
  //       ...action.cashierDetails,
  //       error: '',
  //     };
  //   }
  // ),
  // on(
  //   CashierApiActions.loadCashierDetailsFailure,
  //   (state, action): CashierState => {
  //     return {
  //       ...state,
  //       ...initialState,
  //       error: action.error,
  //     };
  //   }
  // )
);
