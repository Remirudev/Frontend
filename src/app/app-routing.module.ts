import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from '../components/company/company.component';
import { OrdersComponent } from '../components/orders/orders.component';

const routes: Routes = [
  { path: 'company', component: CompanyComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
