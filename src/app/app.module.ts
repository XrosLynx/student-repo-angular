import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StudentListComponent } from './student-list/student-list.component';
import {StudentThumbnailComponent} from './shared/student-thumbnail.component'
import { StudentService } from './service/student.service';
import {ToastrService} from './common/toastr-service';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {CreateStudentComponent} from './shared/create-student.component';
import {Error404Component} from './errors/error-404.component';
import {StudentRouterActivator} from './student-details/student-route-activator.service';
import {appRoutes} from './routes';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    StudentListComponent,
    StudentThumbnailComponent,
    StudentDetailsComponent,
    CreateStudentComponent,
    Error404Component
  ],
  providers: [StudentService,
  ToastrService,
  StudentRouterActivator,
  {
    provide: 'canDeactivateCreateStudent',
    useValue: checkDirtyState
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

export function checkDirtyState(component: CreateStudentComponent){
  if(component.isDrty)
    return window.confirm("Are you sure you want to cancel?")
  return true    
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/