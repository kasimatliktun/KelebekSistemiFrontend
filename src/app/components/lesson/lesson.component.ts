import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
})
export class LessonComponent implements OnInit {
  [x: string]: any;
  
  constructor(private lessonService:LessonService) {}
  title = 'Sınıflar';
  lessons: Lesson[] ; 
  dataLoaded = false; 
  
  
  ngOnInit(): void {
    this.getLessons();
  }
  getLessons() {
  
    this.lessonService.getLessons().subscribe(response=>{
      this.lessons = response.data;  
      this.dataLoaded = true;    
    })
  }

}
