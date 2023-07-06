import { Component, OnInit } from '@angular/core';
import { Salon } from 'src/app/models/salon';
import { SalonService } from 'src/app/services/salon.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css'],
})
export class SalonComponent implements OnInit {
  [x: string]: any;
  
  constructor(private salonService:SalonService) {}
  title = 'Sınıflar';
  salons: Salon[] ; 
  dataLoaded = false; 
  
  
  ngOnInit(): void {
    this.getSalons();
  }
  getSalons() {
  
    this.salonService.getSalons().subscribe(response=>{
      this.salons = response.data;  
      this.dataLoaded = true;    
    })
  }

}
