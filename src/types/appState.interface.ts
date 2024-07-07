import { OrderMenuitem } from '../Entity/OrderMenuitem';
import { Orders } from '../Entity/Orders';

export interface AppStateInterface {
  orders: Orders;
  orderMenuitems: OrderMenuitem[];
}
