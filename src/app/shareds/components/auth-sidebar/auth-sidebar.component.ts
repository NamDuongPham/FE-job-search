import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { AccountService, IAccount } from '../../services/account.service';
import { AuthenService } from 'src/app/services/authen.service';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-auth-sidebar',
  templateUrl: './auth-sidebar.component.html',
  styleUrls: ['./auth-sidebar.component.css']
})
export class AuthSidebarComponent implements OnInit {

  roleName!:string;

  constructor(

    private router:Router,    
    private iziToast: Ng2IzitoastService ,
    private token :TokenStorageService
  ) { 
    this.roleName = this.token.getRoleKey();
    console.log(this.roleName);
  }
  AppURL = AppURL;
  AuthURL = AuthURL;
  UserLogin : IAccount;
  ngOnInit() {
  }



}
