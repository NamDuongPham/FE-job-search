import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isToken:any;
  userName:string;
 

  constructor(private token:TokenStorageService, private auth:AuthService, private router:Router, private news:NewsService) { 
    this.isToken = token.getToken();
    if(token.getToken()!= null){
      this.getInfo()
    }
  }

  ngOnInit() {

  }

  getInfo(){
    this.auth.getUserInfo().subscribe(
      (et)=>{
        this.userName = et.data.userName;
      }
    );
  }

  logout(){
    this.token.singOut();
    window.location.reload()
  }

}
