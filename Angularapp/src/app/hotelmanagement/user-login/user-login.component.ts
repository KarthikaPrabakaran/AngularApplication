import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/shared/room.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocalstorageService } from 'src/app/shared/localstorage.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private service : RoomService,private toastr: ToastrService,private localStorageService : LocalstorageService,private router: Router) { }

  ngOnInit() {
    this.resetloginForm();
  }

  resetloginForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.loginformData = {
      UserName: '',
      Password: '',
      Source: '2'
        }
  }

  
  onSubmit(form: NgForm) {
    this.userLogin(form);
}

userLogin(form: NgForm) {
  this.service.userLogin(form.value).subscribe(res => {
    var statusCode= res.StatusCode;
    if(statusCode == 200)
    {
      this.localStorageService.set('token',res.access_token);
      this.router.navigateByUrl('home');
    }
    else
    {
      this.toastr.success('Invalid username or password');
      this.resetloginForm(form);
    }
 
  });
}

}
