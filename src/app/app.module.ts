import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { NaviComponent } from './components/navi/navi.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DagitimComponent } from './components/dagitim/dagitim.component';
import { ExamComponent } from './components/exam/exam.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { SalonComponent } from './components/salon/salon.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { StudentAdd1Component } from './components/student-add1/student-add1.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DagitimDtoComponent } from './components/dagitim-dto/dagitim-dto.component';
import { StudentImageComponent } from './components/student-image/student-image.component';
import { DagitdtoStudentComponent } from './components/dagitdto-student/dagitdto-student.component';
import { ExamAddComponent } from './components/exam-add/exam-add.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    NaviComponent,
    DagitimComponent,
    ExamComponent,
    LessonComponent,
    SalonComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    StudentAddComponent,
    LoginComponent,
    StudentAdd1Component,
    RegisterComponent,
    HomeComponent,
    DagitimDtoComponent,
    StudentImageComponent,
    DagitdtoStudentComponent,
    ExamAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
