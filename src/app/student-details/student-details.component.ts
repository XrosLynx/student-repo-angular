import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student.service';
import {ActivatedRoute} from '@angular/router';
import { IStudent } from '../shared/index';
import { ToastrService }  from '../common/toastr-service';

@Component({
  templateUrl: './student-details.component.html',
  styles: [`
  .container{padding:20px;}
  `]
})

export class StudentDetailsComponent implements OnInit{
  student: IStudent

  constructor(private studentService: StudentService, private route: ActivatedRoute, private toastr: ToastrService){

  }
  
  ngOnInit(){
    this.student = this.studentService.getStudent(+this.route.snapshot.params['id']).subscribe((student: IStudent)=>{
      this.student = student
    })
  }

  handleToastr(data){
    this.toastr.success(data)
  }

  
}
