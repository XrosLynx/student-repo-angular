import {Injectable} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IStudent } from './shared/index';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentService{
  constructor(private http: HttpClient){

  }
  getStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>('/api/students')
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
  }
  
]