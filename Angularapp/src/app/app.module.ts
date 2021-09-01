import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HotelmanagementComponent } from './hotelmanagement/hotelmanagement.component';
import { UserLoginComponent } from './hotelmanagement/user-login/user-login.component';
import { RoomComponent } from './hotelmanagement/room/room.component';
import { RoomListComponent } from './hotelmanagement/room-list/room-list.component';
import { RoomService } from './shared/room.service';
import { LocalstorageService } from './shared/localstorage.service';
import { AppRoutingModule,routingComponents } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RoomComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [RoomService,LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
