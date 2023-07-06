import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from '../models/lesson';
import { ApiUrl } from '../models/urls';
import { ListResponseModel } from '../models/listReponseModel';

@Injectable({
  providedIn: 'root'
})
export class LessonService {  
  url = ApiUrl + "lessons/";
  
  constructor(private httpClient: HttpClient) { }

  getLessons():Observable<ListResponseModel<Lesson>> {
    return this.httpClient.get<ListResponseModel<Lesson>>(this.url +"getall");
      
  }
}
