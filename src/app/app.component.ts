import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Karatay TOKİ Anadolu Lisesi Kelebek Sistemi';
  constructor(private authService:AuthService){}

  isLoggedIn(){
    return this.authService.isAuthenticated();
  }

  logOut(){
    return this.authService.logOut();
  }

}
