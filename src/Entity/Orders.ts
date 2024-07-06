import { RestaurantTable } from './RestaurantTable';

export interface Orders {
  ordersId: number;
  description: string;
  totalCost: number;
  tableId: number;
}
