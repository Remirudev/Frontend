import { Routes } from '@angular/router';
import { CompanyComponent } from '../components/company/company.component';
import { OrdersComponent } from '../components/orders/orders.component';

export const routes: Routes = [
  { path: 'company', component: CompanyComponent },
  { path: 'orders', component: OrdersComponent },
];
