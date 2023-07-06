import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/urls';
import { Classroom } from '../models/classroom';
import { ListResponseModel } from '../models/listReponseModel';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {  
  url = ApiUrl + "classrooms/"
  constructor(private httpClient: HttpClient) { }

  getClassrooms():Observable<ListResponseModel<Classroom>> {
    return this.httpClient.get<ListResponseModel<Classroom>>(this.url+"getall");
      
  }
}
