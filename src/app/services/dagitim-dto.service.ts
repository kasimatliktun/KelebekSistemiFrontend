import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/urls';
import { DagitimDto } from '../models/dagitimDto';
import { ListResponseModel } from '../models/listReponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DagitimDtoService {
  url = ApiUrl + "dagitims/"
  constructor(private httpClient: HttpClient) { }

  getDagitims():Observable<ListResponseModel<DagitimDto>> {
    let newPath = this.url+"getdagitimdetails"
    return this.httpClient.get<ListResponseModel<DagitimDto>>(newPath);
      
  }

  GetByExamId(examId:number):Observable<ListResponseModel<DagitimDto>> {
    let newPath = this.url + "getbydtoexamid?examId="+examId;
    return this.httpClient.get<ListResponseModel<DagitimDto>>(newPath);
  }

  GetByStudentId(stdId:number):Observable<ListResponseModel<DagitimDto>> {
    let newPath = this.url + "getbydtostudentid?stdId="+stdId;
    return this.httpClient.get<ListResponseModel<DagitimDto>>(newPath);
  }

  GetByExamIdSalonId(examId:number, salonId:number):Observable<ListResponseModel<DagitimDto>> {
    let newPath = this.url + "getbydtoexamidsalonid?examId="+examId+ "&salonId=" + salonId;
    return this.httpClient.get<ListResponseModel<DagitimDto>>(newPath);
  }

  GetByExamIdClassId(examId:number, classId:number):Observable<ListResponseModel<DagitimDto>> {
    let newPath = this.url + "getbydtoexamidclassid?examId="+examId+ "&classId=" + classId;
    return this.httpClient.get<ListResponseModel<DagitimDto>>(newPath);
  }

  GetByExamIdStudentId(examId:number, stdntId:number):Observable<SingleResponseModel<DagitimDto>> {
      let newPath = this.url + "getbydtoexamidstudentid?examId="+examId+ "&stdId=" + stdntId;
      return this.httpClient.get<SingleResponseModel<DagitimDto>>(newPath);
    }
    GetByDateStudentId(stdntId:number):Observable<SingleResponseModel<DagitimDto>> {
      let newPath = this.url + "getbydtodatestudentid?stdId="+ stdntId;
      return this.httpClient.get<SingleResponseModel<DagitimDto>>(newPath);
    }

}
