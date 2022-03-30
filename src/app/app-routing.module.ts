import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from './admin/employee/employee.component';
import {DepartmentComponent} from './admin/department/department.component';
import { StudentComponent } from './admin/student/student.component';
import { AdminComponent } from './admin/admin.component';
import { CourseComponent } from './admin/course/course.component';
import { AcademyComponent } from './admin/academy/academy.component';




const routes: Routes = [
  
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
