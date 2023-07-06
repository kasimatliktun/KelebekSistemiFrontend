import { TokenModel } from './../../models/tokenModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DagitimDto } from 'src/app/models/dagitimDto';
import { Exam } from 'src/app/models/exam';
import { BaseUrl, ImageUrl } from 'src/app/models/urls';
import { DagitimDtoService } from 'src/app/services/dagitim-dto.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-dagitdto-student',
  templateUrl: './dagitdto-student.component.html',
  styleUrls: ['./dagitdto-student.component.css']
})
export class DagitdtoStudentComponent  implements OnInit {
  
  title = 'Dağıtım Yeriniz';
  dagitims: DagitimDto;  
  dataLoaded = false;
  numara: number;

  constructor(
    private dagitimDtoService: DagitimDtoService,    
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // this.numara = this.tokenService.getUserWithJWT().numara;
      // this.GetByDateStudentId(this.numara);
      this.DecodeToken();  
    });
  }
  
 
DecodeToken(){
  const helper = new JwtHelperService();
  let token = localStorage.getItem("token");
  let decodedToken = helper.decodeToken(token);    
  this.numara = Number(decodedToken['sid']);
  this.GetByDateStudentId(this.numara);
}
GetByDateStudentId(stdntId: number) {
    this.dagitimDtoService.GetByDateStudentId(stdntId).subscribe((response) => {                  
      this.dagitims = response.data;        
      this.dataLoaded = true;
    });    
  }
  getStudentImage(studentImage:string){    
    let path = studentImage;    
    return path;
  }

}


