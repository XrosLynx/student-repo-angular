import {Routes} from '@angular/router';
import {Error404Component} from './errors/error-404.component';
import {
  StudentListComponent,
  StudentDetailsComponent,
  CreateStudentComponent,
  StudentRouterActivator,
  StudentResolverService
} from './index'

export const appRoutes = [
  {path: 'students/new', component: CreateStudentComponent, canDeactivate:['canDeactivateCreateStudent']},
  {path: 'students', component: StudentListComponent, resolve: {student: StudentResolverService}},
  {path: 'students/:id', component: StudentDetailsComponent, canActivate: [StudentRouterActivator]},
  {path: '', redirectTo: '/students', pathMatch: 'full'},
  {path: '404', component: Error404Component}
]