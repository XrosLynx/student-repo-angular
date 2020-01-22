import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StudentService{
  getStudents(){
    let subject = new Subject()
    setTimeout(() => {subject.next(STUDENTS); subject.complete();},100)
    return subject
  }

  getStudent(id:number){
    return STUDENTS.find(stud => stud.id === id)
  }
}

const STUDENTS = [
  {
    id: 1,
    name: 'Michael John',
    age: 20,
    address: 'Taguig',
    gwa: 92
  },
  {
    id: 2,
    name: 'Roy Han',
    age: 23,
    address: 'Makati',
    grade: 87
  }
  
]