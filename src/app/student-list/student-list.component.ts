import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { ToastrService }  from '../common/toastr-service';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from '../shared/index';
 
@Component({
  template: `
  <div class="row justify-content-center" >
  <div class="col-md-12 py-4 text-left">
    <h1 class= "margin">
      List of Students
    </h1>
    <hr/>
  </div>
    <div *ngFor = "let student of student" class="col-md-5">
    <student-thumbnail [student]= "student"></student-thumbnail>
  </div>
  </div>
  `,styles:[`
    .margin{
      margin-left: 50px;
      margin-right: 50px;
      width: 100%;
    }
  `]
})
export class StudentListComponent implements OnInit{
  student: IStudent[]

  constructor(private students: StudentService, private toastr: ToastrService, private route: ActivatedRoute){
    
  }

  ngOnInit(){
    this.student = this.route.snapshot.data['student']
  }

  handleToastr(dataName){
    this.toastr.success(dataName)
  }

  
}