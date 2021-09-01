import { Injectable } from '@angular/core';
import { Room } from './room.model';
import { HttpClient } from '@angular/common/http';
import { Login } from './login.model';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  formData : Room;
  loginformData : Login;
  list : Room[];
  readonly rootURL ="http://localhost:44315/api"
  constructor(private http : HttpClient,private localStorageService: LocalstorageService) { }


  postEmployee(formData : Room){
    //return this.http.post(this.rootURL+'/Employee',formData);
    const headers = { 'Authorization': 'bearer '+this.localStorageService.get('token') };
    let body = { 'RoomNo': formData.RoomNo ,'Type':formData.Type};
    //console.log(body);
    return this.http.post<any>(this.rootURL+'/Room/AddRoom', body, { headers });
}

userLogin(loginformData : Login){
  //return this.http.post(this.rootURL+'/Employee',formData);
  const headers = { 'UserName': loginformData.UserName ,'Password':loginformData.Password ,'Source':'2'};
  //console.log(body);
  return this.http.post<any>(this.rootURL+'/Home/GetToken', '', { headers });
}



refreshList(inputDate : string){
  //return this.http.post(this.rootURL+'/Employee',formData);
  const headers = { 'Authorization': 'bearer '+this.localStorageService.get('token')  };
  let body = { 'InputDate': inputDate,'CurrentPage': 1,'PageSize':100};
  console.log(body);
  return this.http.post<any>(this.rootURL+'/Room/GetAvailableRoomForOwner', body, { headers }).subscribe(res => {
    //console.log('print'+res);
    //alert(res.Data as Room[]);
    this.list= res.Data as Room[];
    //this.service.refreshList();
  });
}

//.toPromise().then(res => this.list = res as Employee[]);
}

   
 