import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { ToastrService }  from '../common/toastr-service';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from '../shared/index';
 
@Component({
  template: `
  <div class="row">
    <div *ngFor = "let student of student" class="col-md-5">
    <student-thumbnail [student]= "student"></student-thumbnail>
    </div>
  </div>
  `,
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