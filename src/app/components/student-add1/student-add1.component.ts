import { ClassroomService } from './../../services/classroom.service';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-add1',
  templateUrl: './student-add1.component.html',
  styleUrls: ['./student-add1.component.css'],
  providers:[ClassroomService]
})
export class StudentAdd1Component implements OnInit {
model : Student = {id:0,name:"",classId:0,gender:"",image:"", imagePath:""};
title = "Yeni Öğrenci Ekle";
classrooms: Classroom[] ; 
dataLoaded = false; 
constructor(private  classroomService : ClassroomService){}
  
ngOnInit(): void {
  this.getClassrooms();
}
getClassrooms() {

  this.classroomService.getClassrooms().subscribe(response=>{
    this.classrooms = response.data;      
    this.dataLoaded = true;    
  })
}
add(form:NgForm){
  
}

}
