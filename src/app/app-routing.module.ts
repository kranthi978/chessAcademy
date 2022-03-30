
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SampleComponent } from './auth/sample/sample.component';
import { SignupComponent } from './auth/signup/signup.component';
import {EmployeeComponent} from './admin/employee/employee.component';
import {DepartmentComponent} from './admin/department/department.component';
import { StudentComponent } from './admin/student/student.component';
import { AdminComponent } from './admin/admin.component';
import { CourseComponent } from './admin/course/course.component';
import { AcademyComponent } from './admin/academy/academy.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'sample', component: SampleComponent }
    ],
  },
  {path:'employee',component:EmployeeComponent},
  {path:'department',component:DepartmentComponent},
  {path: 'student' , component:StudentComponent},
  {path: 'admin' , component:AdminComponent},
  {path: 'course', component:CourseComponent},
  {path: 'academy', component:AcademyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
