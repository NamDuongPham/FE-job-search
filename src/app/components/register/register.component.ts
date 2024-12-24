import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Ng2IzitoastService } from 'ng2-izitoast';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { AppURL } from 'src/app/app.url';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit, OnChanges {

  email!:string;
  username!:string;
  password!:string;
  confirmpassword!:string;

  constructor(
    private builder: FormBuilder,
    private iziToast: Ng2IzitoastService ,
    private auth: AuthService,
    private router: Router,
    private http: HttpClient) {
  
  }
  ngOnInit(): void {
   
  }
  ngOnChanges(changes: SimpleChanges): void {
   
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
    this.auth.register(this.username,this.password,this.email).subscribe(
      (data) => {
       
        this.iziToast.success({
            title: 'Đăng ký tài khoản thành công!',
            message: 'Hãy quay lại trang đăng nhập.',
            position: 'topRight'
          });
          this.router.navigate(['/',AppURL.Login]);
      
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
  




}
