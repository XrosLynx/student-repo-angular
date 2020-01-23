import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StudentService } from '../service/student.service';
import { map } from 'rxjs/operators'

@Injectable()
export class StudentResolverService{

  constructor(private studentService: StudentService){
    
  }

  resolve(){
    return this.studentService.getStudents().subscribe()
  }
}