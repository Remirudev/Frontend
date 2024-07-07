import { createAction, props } from '@ngrx/store';
import { Orders } from '../Entity/Orders';
import { OrderMenuitem } from '../Entity/OrderMenuitem';
import { Menuitem } from '../Entity/Menuitem';

export const addToOrder = createAction('[Order] Add to Order', props<Orders>());
export const removeFromOrder = createAction('[Order] Remove from Order');

export const addOrderMenuitemAction = createAction(
  '[OrderMenuitem] Add OrderMenuitem',
  props<{ orderMenuitem: OrderMenuitem }>()
);
export const removeOrderMenuitemAction = createAction(
  '[OrderMenuitem] Remove OrderMenuitem',
  props<{ orderMenuitem: OrderMenuitem }>()
);
export const increaseOrderMenuitemAction = createAction(
  '[OrderMenuitem] Update OrderMenuitem',
  props<{ orderMenuitem: OrderMenuitem }>()
);
export const decreaseOrderMenuitemAction = createAction(
  '[OrderMenuitem] Update OrderMenuitem',
  props<{ orderMenuitem: OrderMenuitem }>()
);

export const getAllOrderMenuitemsAction = createAction(
  '[OrderMenuitem] Get All OrderMenuitems'
);
