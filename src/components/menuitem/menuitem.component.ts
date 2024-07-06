import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../Service/api-calls.service';
import { Menuitem } from '../../Entity/Menuitem';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Orders } from '../../Entity/Orders';

@Component({
  selector: 'app-menuitem',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './menuitem.component.html',
  styleUrl: './menuitem.component.scss',
})
export class MenuitemComponent implements OnInit {
  constructor(private apiCallsService: ApiCallsService) {}

  ngOnInit() {
    this.getAllMenuitems();
    this.getAllOrders();
  }

  menuitems: Menuitem[] = [];
  orders: Orders[] = [];
  order: Orders = {
    ordersId: 3,
    tableId: 2,
    description: '',
    totalCost: 30.0,
  };

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
