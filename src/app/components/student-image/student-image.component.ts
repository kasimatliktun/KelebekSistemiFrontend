import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentImage } from 'src/app/models/studentImage';
import { BaseUrl } from 'src/app/models/urls';
import { StudentImageService } from 'src/app/services/student-image.service';

@Component({
  selector: 'app-student-image',
  templateUrl: './student-image.component.html',
  styleUrls: ['./student-image.component.css']
})
export class StudentImageComponent implements OnInit{


  studentImages : StudentImage[];
  dataLoaded = false;

  constructor(private studentImageService:StudentImageService,private activatedRoute:ActivatedRoute) {}

  ngOnInit():void{
    this.activatedRoute.params.subscribe(params=>{
      if(params["studentId"]){
        this.getStudentImagesByStudentId(params["studentId"])
      }
      else if (params["studentImage"]) {
        this.getImagePath(params["studentImage"])
      }
      else
      {
        this.getStudentImages()
      }   

     
     
    })
   }

   getImagePath(studentImage:string ){
    this.studentImageService.getImagePath(studentImage).subscribe(response=>{
      this.studentImages=response.data
      this.dataLoaded=true;
    })
   }

  getStudentImages(){
    this.studentImageService.getStudentImages().subscribe(response=>{
     this.studentImages=response.data    
     this.dataLoaded = true;
    })
  }

  getStudentImage(studentImgPath:string){
   
    let path = BaseUrl + studentImgPath;
    return path;
  }

  getStudentImagesByStudentId(studentId:number){
    this.studentImageService.getStudentImagesByStudentId(studentId).subscribe(response=>{
    this.studentImages=response.data
    this.dataLoaded = true;
  })  
  }

}
