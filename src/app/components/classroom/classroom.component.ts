import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/models/classroom';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
})
export class ClassroomComponent implements OnInit {
  [x: string]: any;
    title = 'Sınıflar';
  classrooms: Classroom[] ; 
  currentClassroom: Classroom;
  dataLoaded = false; 

  constructor(private classroomService:ClassroomService) {}
    
  ngOnInit(): void {
    this.getClassrooms();
  }
  getClassrooms() {
  
    this.classroomService.getClassrooms().subscribe(response=>{
      this.classrooms = response.data;  
      this.dataLoaded = true;    
    })
  }

  setCurrentClassroom(classroom:Classroom){
    this.currentClassroom = classroom;
  }
  getCurrentClassroomClass(classroom:Classroom){
    if(classroom ==this.currentClassroom){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getAllClassroomClass(){
    if(!this.currentClassroom){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
