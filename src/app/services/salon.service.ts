import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salon } from '../models/salon';
import { ApiUrl } from '../models/urls';
import { ListResponseModel } from '../models/listReponseModel';

@Injectable({
  providedIn: 'root'
})
export class SalonService {  
  url = ApiUrl + "salons/";
  
  constructor(private httpClient: HttpClient) { }

  getSalons():Observable<ListResponseModel<Salon>> {
    return this.httpClient.get<ListResponseModel<Salon>>(this.url+"getall");
      
  }
}
