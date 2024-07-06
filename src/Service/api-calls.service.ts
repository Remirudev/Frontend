import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menuitem } from '../Entity/Menuitem';
import { Enviroment } from '../Enviroment/environments';
import { RestaurantTable } from '../Entity/RestaurantTable';
import { Chair } from '../Entity/Chair';
import { Orders } from '../Entity/Orders';
import { OrderMenuitem } from '../Entity/OrderMenuitem';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  constructor(private http: HttpClient) {}
  private apiServerURL = Enviroment.apiBaseUrl;

  private header = new HttpHeaders({ 'content-type': 'application/json' });

  public getMenuitems(): Observable<Menuitem[]> {
    return this.http.get<Menuitem[]>(`${this.apiServerURL}/menuitems`);
  }

  public getAllTables(): Observable<RestaurantTable[]> {
    return this.http.get<RestaurantTable[]>(`${this.apiServerURL}/table`);
  }

  public getChair(): Observable<Chair[]> {
    return this.http.get<Chair[]>(`${this.apiServerURL}/table/chair`);
  }

  public getOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.apiServerURL}/orders`);
  }

  public postOrder(order: Orders): Observable<Orders> {
    return this.http.post<Orders>(`${this.apiServerURL}/orders`, order, {
      headers: this.header,
    });
  }

  public postOrderMenuitem(
    orderMenuitem: OrderMenuitem
  ): Observable<OrderMenuitem> {
    return this.http.post<OrderMenuitem>(
      `${this.apiServerURL}/orders/ordermenuitem`,
      orderMenuitem,
      {
        headers: this.header,
      }
    );
  }

  public getOrderMenuitem(): Observable<OrderMenuitem[]> {
    return this.http.get<OrderMenuitem[]>(
      `${this.apiServerURL}/orders/ordermenuitem`
    );
  }
}
