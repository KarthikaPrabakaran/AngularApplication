import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/shared/room.service';
import { DatePipe } from '@angular/common';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  providers: [DatePipe]
})
export class RoomListComponent implements OnInit {

  myDate = new Date();
  inputString='';

constructor(private service : RoomService,private datePipe: DatePipe){
    this.inputString = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
}
myForm:FormGroup;

  ngOnInit() {

    this.myForm = new FormGroup({
      'presentDate': new FormControl((new Date()).toISOString().substring(0,10)),
    });

    this.service.refreshList(this.inputString);

  }

  onSubmit(){
    document.getElementById('textmessage').innerHTML = "Status of Rooms on "+this.myForm.value.presentDate;
    this.service.refreshList(this.myForm.value.presentDate);
  }

}
