import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angularapp';

  constructor(private router: Router){
}

  ngOnInit() {
    this.router.navigateByUrl('login');
  }

}
