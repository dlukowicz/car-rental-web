import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AvailableCarsComponent} from "./available-cars/available-cars.component";
import {MyRentalsComponent} from "./my-rentals/my-rentals.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cars', component: AvailableCarsComponent},
  {path: 'myrentals', component: MyRentalsComponent},
  {path: '', component: AvailableCarsComponent}
  ];
export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
