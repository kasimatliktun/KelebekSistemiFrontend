import { ExamComponent } from './components/exam/exam.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DagitimComponent } from './components/dagitim/dagitim.component';
import { LoginComponent } from './components/login/login.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentComponent } from './components/student/student.component';
import { LoginGuard } from './guards/login.guard';
import { StudentAdd1Component } from './components/student-add1/student-add1.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { SalonComponent } from './components/salon/salon.component';
import { DagitimDtoComponent } from './components/dagitim-dto/dagitim-dto.component';
import { StudentImageComponent } from './components/student-image/student-image.component';
import { DagitdtoStudentComponent } from './components/dagitdto-student/dagitdto-student.component';
import { ExamAddComponent } from './components/exam-add/exam-add.component';

const routes: Routes = [
    {path:"",pathMatch:"full", component:HomeComponent},
    {path:"students", component:StudentComponent, canActivate:[LoginGuard]}, 
    {path:"classrooms", component:ClassroomComponent, canActivate:[LoginGuard]},     
    {path:"lessons", component:LessonComponent, canActivate:[LoginGuard]}, 
    {path:"salons", component:SalonComponent, canActivate:[LoginGuard]}, 
    {path:"student-add1", component:StudentAdd1Component, canActivate:[LoginGuard]},    
    {path:"dagitims", component:DagitimComponent, canActivate:[LoginGuard]}, 
    {path:"dagitims/exam/:examId", component:DagitimComponent, canActivate:[LoginGuard]}, 
    {path:"dagitimdtos", component:DagitimDtoComponent, canActivate:[LoginGuard]}, 
    {path:"dagitimdtos/exam/:examId", component:DagitimDtoComponent, canActivate:[LoginGuard]}, 
    {path:"dagitimdtostudent", component:DagitdtoStudentComponent, canActivate:[LoginGuard]}, 
    {path:"studentimages", component:StudentImageComponent, canActivate:[LoginGuard]},
    {path:"students/classroom/:id", component:StudentComponent, canActivate:[LoginGuard]},
    {path:"students/add", component:StudentAddComponent, canActivate:[LoginGuard]},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"exam", component:ExamComponent, canActivate:[LoginGuard]},
    {path:"exams/add", component:ExamAddComponent, canActivate:[LoginGuard]},
    {path:"exams/deleteExam", component:ExamComponent, canActivate:[LoginGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }