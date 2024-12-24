import { Component, OnInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {AuthURL} from 'src/app/authentication/authentication.url';

import jwtDecode from 'jwt-decode';
import { AppURL } from 'src/app/app.url';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  roles: any;
  username!: string;
  password!: string;


  constructor(

    private iziToast: Ng2IzitoastService,
    private router: Router,
    private auth: AuthService,
    private token : TokenStorageService,


  ) {

    if (this.token.getToken() != null) {
        this.auth.setLogin(true);
    }
  }
  ngOnInit(): void {

  }

  login() {
    if (this.username == null || this.password == null) {
      return this.iziToast.warning({
        title: 'Không được để trống thông tin!',
        message: 'Vui lòng nhập đầy đủ thông tin',
        position: 'topRight'
      });
    }
    this.auth.login(this.username,this.password).subscribe(
      (data) => {
        // console.log(data);

        this.token.saveToken(data.data);
        this.auth.setLogin(true);
        this.iziToast.success({
            title: 'Thành công!',
            message: 'Đăng nhập thành công!',
            position: 'topRight'
          });

        this.auth.getInfoRoles().subscribe(
          (et)=>{
          this.token.saveInfo(et.data.roleName,et.data.userId,et.data.comId);
          this.GenarateRouter(et.data.roleName);
          }
        );



      },
      (error) => {
        this.token.singOut();
        this.iziToast.warning({
        title: 'Đã xảy ra lỗi!',
        message: 'Vui lòng đăng nhập lại!',
        position: 'topRight'
        })
      }

    );


  }

  GenarateRouter(role:string){
    if(role.indexOf('ROLE_ADMIN')>0){
      this.router.navigate(['/', AppURL.Authen, AuthURL.Dashboard]);
    }else if(role.indexOf('ROLE_STAFF')>0){
      this.router.navigate(['/', AppURL.Authen, AuthURL.DashboardCom]);
    }else if(role.indexOf('ROLE_USER')){
      this.router.navigate([AppURL.Home]);
    }
  }






}
