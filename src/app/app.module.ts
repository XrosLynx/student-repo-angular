import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  StudentListComponent,
  StudentThumbnailComponent,
  StudentService,
  StudentDetailsComponent,
  CreateStudentComponent,
  StudentRouterActivator,
  StudentResolverService
} from './index'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {ToastrService} from './common/toastr-service';
import {Error404Component} from './errors/error-404.component';
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
  StudentResolverService,
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