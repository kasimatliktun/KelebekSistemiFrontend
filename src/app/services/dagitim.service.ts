import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dagitim } from '../models/dagitim';
import { ApiUrl } from '../models/urls';
import { ListResponseModel } from '../models/listReponseModel';

@Injectable({
  providedIn: 'root'
})
export class DagitimService {
  url = ApiUrl + "dagitims/"
  constructor(private httpClient: HttpClient) { }

  getDagitims():Observable<ListResponseModel<Dagitim>> {
    let newPath = this.url+"getall"
    return this.httpClient.get<ListResponseModel<Dagitim>>(newPath);
      
  }

  GetByExamId(examId:number):Observable<ListResponseModel<Dagitim>> {
    let newPath = this.url + "getbyexamid?examId="+examId;
    return this.httpClient.get<ListResponseModel<Dagitim>>(newPath);
  }

  GetByStudentId(stdId:number):Observable<ListResponseModel<Dagitim>> {
    let newPath = this.url + "getbystudentid?stdId="+stdId;
    return this.httpClient.get<ListResponseModel<Dagitim>>(newPath);
  }

  GetByExamIdStudentId(examId:number, stdId:number):Observable<ListResponseModel<Dagitim>> {
    let newPath = this.url + "getbyexamidstudentid?examId="+examId+ "&stdId=" + stdId;
    return this.httpClient.get<ListResponseModel<Dagitim>>(newPath);
  }
  GetByExamIdSalonId(examId:number, salonId:number):Observable<ListResponseModel<Dagitim>> {
    let newPath = this.url + "getbyexamidsalonid?examId="+examId+ "&salonId=" + salonId;
    return this.httpClient.get<ListResponseModel<Dagitim>>(newPath);
  }

}
