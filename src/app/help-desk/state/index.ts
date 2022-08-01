import { MatTableDataSource } from '@angular/material/table';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.states';
import { HelpDeskState } from './help-desk.reducers';

export interface State extends AppState.State {
  helpDesk: HelpDeskState;
}

const getHelpDeskState = createFeatureSelector<HelpDeskState>('help-desk');

export const getInboxMessages = createSelector(
  getHelpDeskState,
  (state) => new MatTableDataSource(state.inboxMessages)
);

export const getSelectedInboxMessage = createSelector(
  getHelpDeskState,
  (state) => state.selectedInboxMessage
);
