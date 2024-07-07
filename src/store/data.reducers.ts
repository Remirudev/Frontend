import { Orders } from '../Entity/Orders';
import { OrderMenuitem } from '../Entity/OrderMenuitem';
import { createReducer, createSelector, on } from '@ngrx/store';
import * as dataActions from './data.actions';
import { create } from 'domain';

export const ordersReducers: Orders[] = [];
export const orderMenuitemReducers: OrderMenuitem[] = [
  {
    id: 10,
    menuitemId: 1,
    orderId: 1,
    quantity: 0,
  },
];

export const addOrderReducer = createReducer(
  ordersReducers,
  on(dataActions.addToOrder, (state, action) => [...state, action])
);

export const removeOrderReducer = (order: Orders) => {
  ordersReducers.splice(ordersReducers.indexOf(order), 1);
};

export const addOrderMenuitemReducer = createReducer(
  orderMenuitemReducers,
  on(dataActions.addOrderMenuitemAction, (state, { orderMenuitem }) => [
    ...state,
    orderMenuitem,
  ])
);

export const removeOrderMenuitemReducer = createReducer(
  orderMenuitemReducers,
  on(dataActions.removeOrderMenuitemAction, (state, action) => {
    return state.splice(state.indexOf(action.orderMenuitem), 1);
  })
);

export const increaseOrderMenuitemReducer = createReducer(
  orderMenuitemReducers,
  on(dataActions.increaseOrderMenuitemAction, (state, action) => {
    const index = state.indexOf(action.orderMenuitem);
    state[index].quantity += 1;
    return state;
  })
);

export const decreaseOrderMenuitemReducer = createReducer(
  orderMenuitemReducers,
  on(dataActions.decreaseOrderMenuitemAction, (state, action) => {
    const index = state.indexOf(action.orderMenuitem);
    state[index].quantity -= 1;
    return state;
  })
);

export const getAllOrderMenuitemsReducer = createReducer(
  orderMenuitemReducers,
  on(dataActions.getAllOrderMenuitemsAction, (state) => {
    return state;
  })
);
