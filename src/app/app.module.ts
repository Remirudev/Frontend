import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { MenuitemComponent } from '../components/menuitem/menuitem.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { CompanyComponent } from '../components/company/company.component';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import * as reducers from '../store/data.reducers';

@NgModule({
  declarations: [
    AppComponent,
    MenuitemComponent,
    OrdersComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RouterOutlet,
    RouterModule,
    CardModule,
    ImageModule,
    DialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ orderMenuitems: reducers.addOrderMenuitemReducer }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
