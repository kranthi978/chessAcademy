import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './admin/department/department.component';
import { ShowDepComponent } from './admin/department/show-dep/show-dep.component';
import { AddEditDepComponent } from './admin/department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { ShowEmpComponent } from './admin/employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './admin/employee/add-edit-emp/add-edit-emp.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StudentComponent } from './admin/student/student.component';
import { ViewstudentComponent } from './admin/student/viewstudent/viewstudent.component';
import { AddstudentComponent } from './admin/student/addstudent/addstudent.component';
import { AdminComponent } from './admin/admin.component';
import { CourseComponent } from './admin/course/course.component';
import { ViewcourseComponent } from './admin/course/viewcourse/viewcourse.component';
import { AddcourseComponent } from './admin/course/addcourse/addcourse.component';
import { AcademyComponent } from './admin/academy/academy.component';
import { AddacademyComponent } from './admin/academy/addacademy/addacademy.component';
import { ViewacademyComponent } from './admin/academy/viewacademy/viewacademy.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    StudentComponent,
    ViewstudentComponent,
    AddstudentComponent,
    AdminComponent,
    CourseComponent,
    ViewcourseComponent,
    AddcourseComponent,
    AcademyComponent,
    AddacademyComponent,
    ViewacademyComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
