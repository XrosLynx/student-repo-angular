import {Component, Input} from '@angular/core'
import { IStudent } from '../shared/index'
@Component({
  selector: 'student-thumbnail',
  template: `
  <div [routerLink]="['/students',student.id]">
    <h2 class="list-group-item active">{{student?.name | uppercase}}</h2>
      <div class="list-group-item">
        <div>Age: {{student?.age}}</div>
      <div>Address: {{student?.address}}</div>
      <div *ngIf="student?.gwa">GWA: {{student?.gwa}}</div>
      <div *ngIf="student?.grade">Grade: {{student?.grade}}</div>
      </div>
  </div>
  `,
  styles:[`
  .list-group-item{
    margin: 0;
  }
  `]
})

export class StudentThumbnailComponent{
  @Input() student:IStudent
}