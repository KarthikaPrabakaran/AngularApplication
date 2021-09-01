import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/shared/room.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [DatePipe]
})
export class RoomComponent implements OnInit {
  myDate = new Date();
  inputString='';
  constructor(private service : RoomService,private toastr: ToastrService,private datePipe: DatePipe) { 
    this.inputString = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      RoomNo: '',
      Type: 'Single',
      RoomKey: 0,
      Availability:''
    }
  }

  onSubmit(form: NgForm) {
      this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEmployee(form.value).subscribe(res => {
      var statusCode= res.StatusCode;
          if(statusCode == 200)
    {
      this.toastr.success('Inserted successfully');
      this.resetForm(form);
      //this.service.refreshList(this.inputString);
    }
    else
    {
      this.toastr.error(res.Message);
    }
    });
  }



}
