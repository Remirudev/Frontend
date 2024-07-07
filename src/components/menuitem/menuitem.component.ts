import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../Service/api-calls.service';
import { Menuitem } from '../../Entity/Menuitem';

import { Orders } from '../../Entity/Orders';
import { select, Store } from '@ngrx/store';
import { addToOrder } from '../../store/data.actions';
import { ordersReducers } from '../../store/data.reducers';
import { getAllOrderMenuitemsReducer } from '../../store/data.reducers';
import { orderMenuitemReducers } from '../../store/data.reducers';
import { addOrderMenuitemAction } from '../../store/data.actions';
import { removeOrderMenuitemAction } from '../../store/data.actions';
import { increaseOrderMenuitemAction } from '../../store/data.actions';
import { decreaseOrderMenuitemAction } from '../../store/data.actions';
import { getAllOrderMenuitemsAction } from '../../store/data.actions';
import { OrderMenuitem } from '../../Entity/OrderMenuitem';
import { getAllOrderMenuitemsSelector } from '../../store/data.selectors';
import { AppStateInterface } from '../../types/appState.interface';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrl: './menuitem.component.scss',
})
export class MenuitemComponent implements OnInit {
  constructor(
    private apiCallsService: ApiCallsService,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit() {
    this.getAllMenuitems();
    this.getAllOrders();
  }

  menuitems: Menuitem[] = [];
  ordermenuitem: OrderMenuitem = {
    id: 15,
    menuitemId: 1,
    orderId: 1,
    quantity: 0,
  };
  orderMenuItems: OrderMenuitem[] = [];
  orders: Orders[] = [];
  order: Orders = {
    ordersId: 10,
    tableId: 2,
    description: '',
    totalCost: 30.0,
  };

  addToOrderMenuitem(menuitem: Menuitem) {
    this.ordermenuitem.menuitemId = menuitem.menuitemId;
    this.ordermenuitem.orderId = this.order.ordersId;
    this.store.dispatch(
      addOrderMenuitemAction({ orderMenuitem: this.ordermenuitem })
    );
    this.store
      .pipe(select(getAllOrderMenuitemsSelector))
      .subscribe((orderMenuitem) => {
        this.orderMenuItems = orderMenuitem;
      });
    console.log(this.orderMenuItems);
  }

  getAllOrders() {
    this.apiCallsService.getOrders().subscribe({
      next: (data) => {
        console.log(data);
        this.orders = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  postOrder(order: Orders) {
    this.apiCallsService.postOrder(order).subscribe({
      next: (data) => {
        console.log(data);
        this.orders.push(data);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  getAllMenuitems() {
    this.apiCallsService.getMenuitems().subscribe({
      next: (data) => {
        console.log(data);
        this.menuitems = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
