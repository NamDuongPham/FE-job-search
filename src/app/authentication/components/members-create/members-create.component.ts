import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { AuthService } from 'src/app/services/auth.service';
import { AuthURL } from '../../authentication.url';
import { AppURL } from 'src/app/app.url';

@Component({
  selector: 'app-members-create',
  templateUrl: './members-create.component.html',
  styleUrls: ['./members-create.component.css']
})
export class MembersCreateComponent implements OnInit {

  email:string;
  username:string;
  password:string;

  constructor(private auth:AuthService, private router:Router, private iziToast: Ng2IzitoastService) { }

  ngOnInit() {
  }

  save(){
    if(this.email == null || this.username == null || this.password == null){
      return this.iziToast.warning({
        title: 'Chưa điền đầy đủ thông tin!',
        message: 'Vui lòng điền đầy đủ thông tin.',
        position: 'topRight'
      });}
      this.auth.register(this.username,this.password,this.email).subscribe(
        (data) => {
         
          this.iziToast.success({
              title: 'Đăng ký tài khoản thành công!',
              message: 'Hãy qua trang quản lý người dùng.',
              position: 'topRight'
            });
            this.router.navigate(['/',AppURL.Authen,AuthURL.Members]);
        
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

