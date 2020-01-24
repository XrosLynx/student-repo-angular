import {Component, Input} from '@angular/core'
import { IStudent } from '../shared/index'

@Component({
  selector: 'student-thumbnail',
  template: `
  <div [routerLink]="['/students',student.id]" class="list-group-item">
    <h2 >{{student?.name | uppercase}}</h2>
      <div>Age: {{student?.age}}</div>
      <div>Address: {{student?.address}}</div>
      <div *ngIf="student?.gwa">GWA: {{student?.gwa}}</div>
      <div *ngIf="student?.grade">Grade: {{student?.grade}}</div>
  </div>
  `
})

export class StudentThumbnailComponent{
  @Input() student:IStudent
}