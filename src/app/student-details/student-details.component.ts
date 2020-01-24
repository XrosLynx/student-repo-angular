import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student.service';
import {ActivatedRoute} from '@angular/router';
import { IStudent } from '../shared/index';
import { ToastrService }  from '../common/toastr-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: './student-details.component.html',
  styles: [`
  .container{padding:20px;}
  `]
})

export class StudentDetailsComponent implements OnInit{
  student: IStudent
  studentDetails: FormGroup

  constructor(private studentService: StudentService, private route: ActivatedRoute, private toastr: ToastrService){

  }
  
  ngOnInit(){
    this.student = this.studentService.getStudent(+this.route.snapshot.params['id'])

    let name = new FormControl(this.student.name)
    let age = new FormControl(this.student.age)
    let addr = new FormControl(this.student.address)
    let gwa = new FormControl(this.student.gwa)

    this.studentDetails = new FormGroup({
      name: name,
      age: age,
      addr: addr,
      gwa: gwa
    })

    
  }

   handleToastr(dataName){
    this.toastr.success(dataName)
  }

  
}
