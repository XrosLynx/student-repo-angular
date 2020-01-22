import {Routes} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {CreateStudentComponent} from './shared/create-student.component';
import {Error404Component} from './errors/error-404.component';
import {StudentRouterActivator} from './student-details/student-route-activator.service';

export const appRoutes = [
  {path: 'students/new', component: CreateStudentComponent, canDeactivate:['canDeactivateCreateStudent']},
  {path: 'students', component: StudentListComponent},
  {path: 'students/:id', component: StudentDetailsComponent, canActivate: [StudentRouterActivator]},
  {path: '', redirectTo: '/students', pathMatch: 'full'},
  {path: '404', component: Error404Component}
]