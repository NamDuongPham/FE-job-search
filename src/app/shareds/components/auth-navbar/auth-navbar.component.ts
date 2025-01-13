import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.css']
})
export class AuthNavbarComponent implements OnInit {

  AppURL?:any;
  AuthURL?:any;
  username!:string;
  role!:string;
  image!:string;

  constructor(
    private router: Router,
    private iziToast: Ng2IzitoastService ,
    private token:TokenStorageService,
    private auth:AuthService

  ) { 
    
    this.role = this.token.getRoleKey();
    this.initialloadUserLogin();
  }
 
  
  

  ngOnInit() {
    this.AppURL = AppURL;
    this.AuthURL = AuthURL;
    this.auth.getUserInfo().subscribe(
      (et)=>{
          this.image = et.data.avatar;
         this.username = et.data.userName;
      }
    );
  }

  private initialloadUserLogin(){
    if(this.token.getToken == null){
      this.token.singOut();
      this.router.navigate(['/',AppURL.Login]);
      return this.iziToast.warning({
        title: 'Token hết hạn!',
        message: 'Vui lòng đăng nhập lại!',
        position: 'topRight'
      });
    }
  }

  onLogout() {
    this.iziToast.success({
      title: 'Logout!',
      message: 'Đăng xuất thành công',
      position: 'topRight'
    });

    this.token.singOut();
    this.router.navigate(['/', AppURL.Login]);
   
  }

 
}
