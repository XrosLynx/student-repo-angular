import {Injectable} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IStudent } from './shared/index';

@Injectable()
export class StudentService{
  
  getStudents(): Observable<IStudent[]>{
    let subject = new Subject<IStudent[]>()
    setTimeout(() => {subject.next(STUDENTS); subject.complete();},100)
    return subject
  }

  getStudent(id:number): IStudent{
    return STUDENTS.find(stud => stud.id === id)
  }
}

const STUDENTS: IStudent[] = [
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
  },
  {
    id: 3,
    name: 'Roy Han',
    age: 23,
    address: 'Makati',
    grade: 87
  },
  {
    id: 4,
    name: 'Michael John',
    age: 20,
    address: 'Taguig',
    gwa: 92
  },
  {
    id: 5,
    name: 'Roy Han',
    age: 23,
    address: 'Makati',
    grade: 87
  },
  {
    id: 6,
    name: 'Roy Han',
    age: 23,
    address: 'Makati',
    grade: 87
  },
  
]