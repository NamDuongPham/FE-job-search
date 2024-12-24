import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  totalNews!:any;

  constructor(private news:NewsService) { 
  }

  ngOnInit() {
    this.news.getTotalFindNews().subscribe(
      (et)=>{
        this.totalNews = et.data;
      }
    );

  }


}
