import {Injectable} from '@angular/core'

@Injectable()
export class StudentService{
  getStudents(){
    return STUDENTS;
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