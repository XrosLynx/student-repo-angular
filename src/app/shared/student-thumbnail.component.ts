import {Component, Input} from '@angular/core'
import { IStudent } from './shared/student.model'

@Component({
  selector: 'student-thumbnail',
  template: `
  <div [routerLink]="['/students',student.id]" class="list-group-item">
    <h2 >{{student?.name}}</h2>
      <div>Age: {{student?.age}}</div>
      <div>Address: {{student?.address}}</div>
      <div *ngIf="student?.gwa">GWA: {{student?.gwa}}</div>
      <div *ngIf="student?.grade">Grade: {{student?.grade}}</div>
  </div>
  `,
  styles:[`
  .thumbnail{min-height: 210px; margin: 10px;}
  .pad-left{margin-left: 100px;}
  .well{background-color: #e7e7e7;}
  `]
})

export class StudentThumbnailComponent{
  @Input() student: IStudent
}