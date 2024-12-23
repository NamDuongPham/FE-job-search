import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { DichvuService } from 'src/app/services/dichvu.service';
import { AuthURL } from '../../authentication.url';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-services-create',
  templateUrl: './services-create.component.html',
  styleUrls: ['./services-create.component.scss']
})
export class ServicesCreateComponent implements OnInit {

  nameServices:string;
  describeService:string;
  priceService:number;
  numberNews:number;
  time:number;

  constructor(private dichvu:DichvuService, private router:Router,private iziToast: Ng2IzitoastService,) { }

  ngOnInit() {
  }

  addService(){
    if(this.nameServices == null  || this.describeService == null || this.priceService == null ||this.numberNews == null || this.time == null){
      return this.iziToast.warning({
        title: 'Chưa điền đầy đủ thông tin!',
        message: 'Vui lòng điền đầy đủ thông tin.',
        position: 'topRight'
      });
    }
    this.dichvu.createServices(this.nameServices,this.describeService,this.priceService,this.time,this.numberNews).subscribe(
        (et)=>{
          this.iziToast.success({
            title: 'Thành công!',
            message: 'Đã thêm dịch vụ thành công!.',
            position: 'topRight'
          });
          this.router.navigate(['/',AppURL.Authen,AuthURL.Services]);
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
