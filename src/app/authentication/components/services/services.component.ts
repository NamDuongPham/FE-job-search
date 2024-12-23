import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { CompaniesService } from 'src/app/services/companies.service';
import { DichvuService } from 'src/app/services/dichvu.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  data:any;
  roleName:any;
  idCom:any;
  constructor(private router:Router, private dichvu:DichvuService, private token:TokenStorageService, private com:CompaniesService, private iziToast: Ng2IzitoastService) {
      this.roleName = token.getRoleKey();
      this.idCom = token.getComId();
   }

  ngOnInit() {
    this.dichvu.getAllServices().subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }

  buy(idServices:number){
      this.com.buyServices(idServices,Number(this.idCom)).subscribe(
        (et)=>{
          this.iziToast.success({
            title: 'Thành công!',
            message: 'Đã mua dịch vụ thành công!.',
            position: 'topRight'
          });
          // this.router.navigate(['/',AppURL.Authen,AuthURL.Services]);
        },
        (err)=>{
          this.iziToast.warning({
            title: 'Thất bại!',
            message: 'Lỗi mua dịch vụ thất bại!.',
            position: 'topRight'
          });
        }
      );
  }

}
