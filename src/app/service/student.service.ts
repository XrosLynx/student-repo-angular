import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStudent } from './shared/index';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'

@Injectable()
export class StudentService{
  constructor(private http: HttpClient){

  }
  getStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>('/api/students').pipe(catchError(this.handleError<IStudent>('getStudents, []')))
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getStudent(id:number): IStudent{
    return this.http.get<IStudent>('/api/students/' + id).pipe(catchError(this.handleError<IStudent>('getStudents')))
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