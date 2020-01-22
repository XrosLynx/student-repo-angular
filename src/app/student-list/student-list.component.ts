import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student-service';
import {ToastrService} from '../common/toastr-service';
 
@Component({
  template: `
  <div class="row">
    <div class="thumbnail" *ngFor = "let student of student" class="col-md-6">
    <student-thumbnail [student]= "student"></student-thumbnail>
    </div>
  </div>
  `,
})
export class StudentListComponent implements OnInit{
  student: any[]

  constructor(private students: StudentService, private toastr: ToastrService){
    
  }

  ngOnInit(){
    this.student = this.students.getStudents()
  }

  handleToastr(dataName){
    this.toastr.success(dataName)
  }
}