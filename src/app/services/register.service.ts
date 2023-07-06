import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/urls';
import { ListResponseModel } from '../models/listReponseModel';

import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  url = ApiUrl + "auth/";  
  
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<ListResponseModel<User>>{
    let newPath=this.url+"getall"
    return this.httpClient.get<ListResponseModel<User>>(newPath)
  }

  getByUserEmail(email:string):Observable<ListResponseModel<User>>{
    let newPath=this.url+"getbyemail?email="+email
    return this.httpClient.get<ListResponseModel<User>>(newPath)
  }

  getByUserId(userId:number):Observable<ListResponseModel<User>>{
    let newPath=this.url+"getbyid?userId="+userId
    return this.httpClient.get<ListResponseModel<User>>(newPath)
  }

  getByUserName(name:string):Observable<ListResponseModel<User>>{
    let newPath=this.url+"getbyname?name="+name
    return this.httpClient.get<ListResponseModel<User>>(newPath)
  }

  update(user:User):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url+"update",user)
  }
}
