import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Exam } from '../models/exam';
import { ApiUrl } from '../models/urls';
import { ListResponseModel } from '../models/listReponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ExamService {  
  url = ApiUrl + "exams/"
  constructor(private httpClient: HttpClient) { }

  getExams():Observable<ListResponseModel<Exam>> {
    return this.httpClient.get<ListResponseModel<Exam>>(this.url+"getall");
    
  }

  addExam(exam:Exam):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url+"add",exam)
  }

  deleteExam(examId:number):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url+"delete?Id="+examId,examId)
  }

  updateExam(examId:number):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url+"updateExam",examId)
  }

}
