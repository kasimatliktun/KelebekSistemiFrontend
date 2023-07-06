import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private jwtHelperService: JwtHelperService = new JwtHelperService();

  constructor(private localStorageService: LocalStorageService) {}

  decodeToken(token: string) {
    return this.jwtHelperService.decodeToken(token);
  }

  getToken(): string {
    return this.localStorageService.getItem('token');
  }

  setToken(token: string): void {
    this.localStorageService.setItem('token', token);
  }

  removeToken(): void {
    this.localStorageService.removeItem('token');
  }

  getRefreshToken(): string {
    return this.localStorageService.getItem('refresh-token');
  }

  setRefreshToken(refreshToken: string): void {
    this.localStorageService.setItem('refresh-token', refreshToken);
  }

  removeRefreshToken(): void {
    this.localStorageService.removeItem('refresh-token');
  }

  getClientId(): string {
    return this.localStorageService.getItem('client-id');
  }

  setClientId(clientId: string): void {
    this.localStorageService.setItem('client-id', clientId);
  }

  removeClientId(): void {
    this.localStorageService.removeItem('client-id');
  }

  isTokenExpired(): boolean {
    let isExpired = this.jwtHelperService.isTokenExpired(this.getToken());

    return isExpired != null ? isExpired : true;
  }

  getTokenExpirationDate(): Date {
    return this.jwtHelperService.getTokenExpirationDate(this.getToken());
  }

  getUserRolesWithJWT(): string[] {
    let token = this.decodeToken(this.getToken());

    if (token != null) {
      let roles =
        token[Object.keys(token).filter((r) => r.endsWith('/role'))[0]];

      if (!Array.isArray(roles)) {
        let array = [];
        array.push(roles);

        return array;
      }
console.log(roles);
      return roles;
    }

    return [];
  }

  getUserWithJWT(): User {
    let token = this.jwtHelperService.decodeToken(this.getToken());

    if (token != null) {
      let userModel = {
       
        email: token.email,
        
        firstName: token[Object.keys(token).filter((r) => r.endsWith('/name'))[0]],
        lastName: token[Object.keys(token).filter((r) => r.endsWith('/name'))[0]],        
        password: '',
        numara: Number(token.sid),
        sinif: ''

      };

      return userModel;
    }

    return null;
  }
}
