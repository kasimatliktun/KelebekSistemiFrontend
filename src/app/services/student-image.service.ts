import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listReponseModel';
import { Observable } from 'rxjs';
import { ApiUrl, ImageUrl } from '../models/urls';
import { StudentImage } from '../models/studentImage';
import { ToastrService } from 'ngx-toastr';
import { TemplatesService } from './templates.service';

@Injectable({
  providedIn: 'root'
})
export class StudentImageService {  
  url = ApiUrl + "StudentImages/"
  imageUrl = ImageUrl;
  

  constructor(private httpClient: HttpClient, private toastrService:ToastrService, private templatesService:TemplatesService) { }
 
  getStudentImages():Observable<ListResponseModel<StudentImage>>{
   let newPath = this.url + "getall"
   return this.httpClient.get<ListResponseModel<StudentImage>>(newPath);    
  }
  
  
  getStudentImagesByStudentId(studentId:number):Observable<ListResponseModel<StudentImage>>{
   let newPath = this.url + "getbystudentid?studentId="+studentId 
   return this.httpClient.get<ListResponseModel<StudentImage>>(newPath);     
  }

  getByStudentId(studentId:number):Observable<ListResponseModel<StudentImage>>{
    let newPath = this.url + "getbystudentid?studentId=" + studentId;
    return this.httpClient.get<ListResponseModel<StudentImage>>(newPath)
  }
  getImagePath(studentImage: string):Observable<ListResponseModel<StudentImage>>{
    let newPath = this.imageUrl+studentImage 
    return this.httpClient.get<ListResponseModel<StudentImage>>(newPath)
  }

 
}
