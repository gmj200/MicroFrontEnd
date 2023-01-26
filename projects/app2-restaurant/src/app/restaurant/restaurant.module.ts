import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import {RouterModule, Routes} from "@angular/router";
import { RestaurantDetailComponent } from './detail/detail.component';
import {OrderComponent} from "../../../../app3-orders/src/app/order/order.component";
import { MfeOrderComponentComponent } from './mfe-order-component/mfe-order-component.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent
  },
  {
    path: ':slug',
    component: RestaurantDetailComponent,
  },
  {
    path: ':slug/order',
    component: OrderComponent,
  }
];

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantDetailComponent,
    MfeOrderComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RestaurantModule { }
