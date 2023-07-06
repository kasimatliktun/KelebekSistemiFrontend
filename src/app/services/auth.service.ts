import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { ApiUrl } from '../models/urls';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = ApiUrl + "auth/";
  private tokenExpirationTimer: any;
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.url+"login",loginModel)    
  }

  saveToken(token: string, expiration: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expiration.toISOString());

    const expiresIn = expiration.getTime() - new Date().getTime();
    localStorage.setItem('expiresIn', expiresIn.toString());

    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, expiresIn);
  }



  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
// Çıkış için tokeni localstrage den siliyoruz.
  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    clearTimeout(this.tokenExpirationTimer);
    this.isAuthenticated();
  }

  register(user:User):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.url+"register",user)
  }
}
