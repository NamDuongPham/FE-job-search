import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  data:any;

  addressCompany:string;
  idCompany:number;
  money:number=0;
  nameCompany:string;
  userName:string;

  constructor(private com:CompaniesService, private router:Router) { }

  ngOnInit() {
    this.com.getAllCompanies().subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }

  detail(data){
    this.addressCompany = data.addressCompany;
    this.idCompany = data.idCompany;
    this.money = data.money;
    this.nameCompany = data.nameCompany;
    this.userName = data.userName;  
  }



}
