import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './student-details.component.html',
  styles: [`
  .container{padding:20px;}
  `]
})

export class StudentDetailsComponent implements OnInit{
  student: any

  constructor(private studentService: StudentService, private route: ActivatedRoute){

  }
  
  ngOnInit(){
    this.student = this.studentService.getStudent(+this.route.snapshot.params['id'])
  }
}
