
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
imports: [    RouterModule,  ]
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgToastModule } from 'ng-angular-popup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SampleComponent } from './auth/sample/sample.component';
import { ShowDepComponent } from './admin/department/show-dep/show-dep.component';
import { DepartmentComponent } from './admin/department/department.component';
import { AddEditDepComponent } from './admin/department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { ShowEmpComponent } from './admin/employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './admin/employee/add-edit-emp/add-edit-emp.component';
import { StudentComponent } from './admin/student/student.component';
import { ViewstudentComponent } from './admin/student/viewstudent/viewstudent.component';
import { AddstudentComponent } from './admin/student/addstudent/addstudent.component';
import { AdminComponent } from './admin/admin.component';
import { CourseComponent } from './admin/course/course.component';
import { ViewacademyComponent } from './admin/academy/viewacademy/viewacademy.component';
import { AddacademyComponent } from './admin/academy/addacademy/addacademy.component';
import { AcademyComponent } from './admin/academy/academy.component';
import { ViewcourseComponent } from './admin/course/viewcourse/viewcourse.component';
import { AddcourseComponent } from './admin/course/addcourse/addcourse.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    SampleComponent,
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
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [HttpClient, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
