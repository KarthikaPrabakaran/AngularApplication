import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import {UserLoginComponent} from './hotelmanagement/user-login/user-login.component'
import {HotelmanagementComponent} from './hotelmanagement/hotelmanagement.component'

const routes: Routes = [
  {path: 'login',component: UserLoginComponent},
  {path: 'home',component: HotelmanagementComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserLoginComponent,HotelmanagementComponent]
