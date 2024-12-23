import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CompaniesService } from 'src/app/services/companies.service';
import { CvsService } from 'src/app/services/cvs.service';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalUser:number = 0;
  totalCom:number = 0;
  totalCv:number = 0;
  totalNews:number = 0;

  constructor(private auth:AuthService, private com:CompaniesService, private cv:CvsService, private news:NewsService) { }

  ngOnInit() {
    this.auth.totalUser().subscribe(
      (et)=>{
        this.totalUser = et.data;
      }
    );
    this.com.getTotal().subscribe(
      (et)=>{
        this.totalCom = et.data;
      }
    );
    this.cv.totalCvs().subscribe(
      (et)=>{
        this.totalCv = et.data;
      }
    );
    this.news.totalNews().subscribe(
      (et)=>{
        this.totalNews = et.data;
      }
    );
    

  }

}
