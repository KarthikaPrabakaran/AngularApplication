import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/shared/localstorage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hotelmanagement',
  templateUrl: './hotelmanagement.component.html',
  styleUrls: ['./hotelmanagement.component.css']
})
export class HotelmanagementComponent implements OnInit {

  constructor(private localStorageService : LocalstorageService,private router: Router) { }

  ngOnInit() 
  {
     var token = this.localStorageService.get("token");
     if(token == null || token == '')
     {
      this.router.navigateByUrl('login');
     }
  }

}
