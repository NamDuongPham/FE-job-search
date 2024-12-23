import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { AppURL } from 'src/app/app.url';
import { AuthService } from 'src/app/services/auth.service';
import { CompaniesService } from 'src/app/services/companies.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthURL } from '../../authentication.url';

@Component({
  selector: 'app-info-com',
  templateUrl: './info-com.component.html',
  styleUrls: ['./info-com.component.css']
})
export class InfoComComponent implements OnInit {

  nameCom!:string;
  address!:string;
  userId!:any;
  comId!:any;

  constructor(private iziToast: Ng2IzitoastService ,
    private auth: AuthService,
    private router: Router,
    private http: HttpClient,
    private token:TokenStorageService,
    private com:CompaniesService) { 
      this.userId = token.getUserId();
      this.comId = token.getComId();
    }

  ngOnInit() {
  }

  onSubmit(){
    if(this.address == null || this.nameCom == null){
      return this.iziToast.warning({
      title: 'Chưa điền đầy đủ thông tin!',
      message: 'Vui lòng điền đầy đủ thông tin.',
      position: 'topRight'
    });
  }
  this.com.updateProfile(Number(this.userId),Number(this.comId),this.nameCom,this.address).subscribe(
    (et)=>{
      this.iziToast.success({
        title: 'Đăng ký tài khoản thành công!',
        message: 'Tiếp tục vào trang quản trị của công ty!',
        position: 'topRight'
      });
      this.router.navigate(['/', AppURL.Authen, AuthURL.DashboardCom]);
    }, (error) => {
      this.iziToast.warning({
        title: 'Lỗi server!',
        message: 'Hãy kiểm tra lại.',
        position: 'topRight'
      });
    }
  );
  }

}
