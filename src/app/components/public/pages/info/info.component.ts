import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { AppURL } from 'src/app/app.url';
import { UserInfo } from 'src/app/authentication/components/profile/userInfo';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  user?:UserInfo;

  image!:any;
  money:number = 0;
  address!:string;
  fullname!:string;
  newPassword!:string;
  newPasswordT!:string;

  constructor(

  private alert: Ng2IzitoastService,
  private auth:AuthService,
  private token:TokenStorageService,
  private router: Router,
  ) {

  }
  ngOnInit(): void {
    this.auth.getUserInfo().subscribe(
      (et)=>{
        this.fullname = et.data.fullName;
        this.address = et.data.address;
        this.image = et.data.avatar;
        this.money = et.data.total;
      },
      (err)=>{
        this.token.singOut();
        this.router.navigate(['/',AppURL.Login]);
        this.alert.warning({
                  title: 'Lỗi!',
                  message: 'Token đã hết hạn!',
                  position: 'topRight'
        })
      }
    );
  }

  onSave(){
    this.auth.udpateUser(this.fullname,this.address).subscribe(
      (et)=>{
        this.fullname = et.data.fullName;
        this.address = et.data.address;
        this.image = et.data.avatar;
        this.money = et.data.total;
        this.alert.success({
          title: 'Thành công!',
          message: "Cập nhật thành công!",
          position: 'topRight'
        })
      },
      (err)=>{
        this.token.singOut();
        this.router.navigate(['/',AppURL.Login]);
        this.alert.warning({
                  title: 'Lỗi!',
                  message: 'Token đã hết hạn!',
                  position: 'topRight'
        })
      }
    );
  }

  onChangePass(){
    if(this.newPassword == null || this.newPasswordT == null){
        return this.alert.warning({
        title: 'Thiếu thông tin !',
        message: "Vui lòng điền đầy đủ thông tin",
        position: 'topRight'
      });
    }

    if(this.newPassword !== this.newPasswordT){
      return this.alert.warning({
      title: 'Mật khẩu không khớp!',
      message: "Vui lòng điền lại mật khẩu",
      position: 'topRight'
    });
  }


    this.auth.changePass(this.newPassword,this.newPasswordT).subscribe(
      (et)=>{
        this.alert.success({
          title: 'Đổi mật khẩu thành công !',
          message: et.data,
          position: 'topRight'
        });
      },
      (err)=>{
        this.alert.warning({
                  title: 'Lỗi!',
                  message: 'Đổi mật khẩu thất bại!',
                  position: 'topRight'
        })
      }
    );
  }

}
