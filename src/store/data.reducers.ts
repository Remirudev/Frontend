import { Orders } from '../Entity/Orders';

export const orders: Orders[] = [];

export const addOrder = (order: Orders) => {
  orders.push(order);
};

export const removeOrder = (order: Orders) => {
  orders.splice(orders.indexOf(order), 1);
};
