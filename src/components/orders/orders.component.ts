import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../Service/api-calls.service';
import { Menuitem } from '../../Entity/Menuitem';
import { RestaurantTable } from '../../Entity/RestaurantTable';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  constructor(private apiCallsService: ApiCallsService) {}

  tableImg: string = './../../assets/table.jpg';
  stoolImg: string = './../../assets/stool.png';

  visible: boolean = false;

  menuitems: Menuitem[] = [];
  restaurantTables: RestaurantTable[] = [];

  ngOnInit() {
    this.getAllRestaurantTables();
    console.log(this.restaurantTables);
  }

  showDialog() {
    this.visible = true;
  }

  getAllRestaurantTables() {
    this.apiCallsService.getAllTables().subscribe({
      next: (data) => {
        console.log(data);
        this.restaurantTables = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
