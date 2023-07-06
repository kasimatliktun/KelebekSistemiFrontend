import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/urls';
import { ListResponseModel } from '../models/listReponseModel';
import { ResponseModel } from '../models/responseModel';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  url = ApiUrl + "students/";
  
  constructor(private httpClient: HttpClient) { }

  getStudents():Observable<ListResponseModel<Student>> {
    let newPath = this.url + "getall"
    return this.httpClient.get<ListResponseModel<Student>>(newPath);      
  }

  getByClass(id:number):Observable<ListResponseModel<Student>> {
    let newPath = this.url + "getbyclass?id="+id
    return this.httpClient.get<ListResponseModel<Student>>(newPath);
  }

  add(student:Student):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url+"add",student)
  }


  
}
