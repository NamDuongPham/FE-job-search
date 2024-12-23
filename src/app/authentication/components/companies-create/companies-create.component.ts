import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { AuthService } from 'src/app/services/auth.service';
import { AuthURL } from '../../authentication.url';
import { AppURL } from 'src/app/app.url';

@Component({
  selector: 'app-companies-create',
  templateUrl: './companies-create.component.html',
  styleUrls: ['./companies-create.component.scss']
})
export class CompaniesCreateComponent implements OnInit {

  username:number = 0;
  role:number = 0;

  data:any;
  constructor(private auth:AuthService,private iziToast: Ng2IzitoastService, private router:Router) { 
  
  }

  ngOnInit() {
    this.auth.getAllUsers().subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }

  save(){
      if(this.username == 0  || this.role == 0){
        return this.iziToast.warning({
          title: 'Chưa điền đầy đủ thông tin!',
          message: 'Vui lòng điền đầy đủ thông tin.',
          position: 'topRight'
        });
      }
      this.auth.addCompany(this.username,Number(this.role)).subscribe(
        (et)=>{
          this.iziToast.success({
            title: 'Thành công!',
            message: 'Đã thêm công ty thành công!.',
            position: 'topRight'
          });
          this.router.navigate(['/',AppURL.Authen,AuthURL.Companies]);
          
        },
        (err)=>{
          this.iziToast.warning({
            title: 'Thất bại!',
            message: 'Lỗi thêm cty thất bại!.',
            position: 'topRight'
          });
        }
      );
  }

}
