import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-res-com',
  templateUrl: './res-com.component.html',
  styleUrls: ['./res-com.component.css']
})
export class ResComComponent implements OnInit {

  email!:string;
  username!:string;
  password!:string;
  confirmpassword!:string;
  AppURL = AppURL;
  

  constructor(
    private iziToast: Ng2IzitoastService ,
    private auth: AuthService,
    private router: Router,
    private http: HttpClient,
    private token:TokenStorageService) {
  
  }


  ngOnInit(): void {
   
  }

  onSubmit() {
    if(this.username == null || this.password == null || this.confirmpassword == null || this.email == null){
        return this.iziToast.warning({
        title: 'Chưa điền đầy đủ thông tin!',
        message: 'Vui lòng điền đầy đủ thông tin.',
        position: 'topRight'
      });
    }
    if(this.password != this.confirmpassword){
        return this.iziToast.warning({
        title: 'Mật khẩu không khớp!',
        message: 'Vui lòng điền đúng mật khẩu.',
        position: 'topRight'
      });
    }
    this.auth.registerCom(this.username,this.password,this.email).subscribe(
      (data) => {
       
        this.iziToast.success({
            title: 'Đăng ký tài khoản thành công!',
            message: 'Hãy quay lại trang đăng nhập.',
            position: 'topRight'
          });
        this.login();
      
      },
      (error) => {
        this.iziToast.warning({
          title: 'Lỗi server!',
          message: 'Hãy kiểm tra lại.',
          position: 'topRight'
        });
      }
    );

  }


  login() {
    this.auth.login(this.username,this.password).subscribe(
      (data) => {
        this.token.saveToken(data.data);
        this.auth.setLogin(true);
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
   if(role.indexOf('ROLE_STAFF')>0){
      this.router.navigate(['/', AppURL.Authen, AuthURL.InfoCom]);
    }else{
      this.token.singOut();
      this.router.navigate([AppURL.Home]);
    }
  }



}
