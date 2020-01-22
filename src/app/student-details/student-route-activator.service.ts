import {Router, ActivatedRouteSnapshot,CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {StudentService} from '../service/student.service';

@Injectable()
export class StudentRouterActivator implements CanActivate{
  constructor(private studentService: StudentService, private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot){
    const studentExist = !!this.studentService.getStudent(+route.params['id'])

    if(!studentExist)
    this.router.navigate(['/404'])

    return studentExist
  }
}