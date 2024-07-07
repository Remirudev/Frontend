import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../types/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.orderMenuitems;

export const getAllOrderMenuitemsSelector = createSelector(
  selectFeature,
  (state) => {
    return state;
  }
);
