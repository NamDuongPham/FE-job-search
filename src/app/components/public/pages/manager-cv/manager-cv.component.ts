import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { AuthService } from 'src/app/services/auth.service';
import { CareerService } from 'src/app/services/career.service';
import { CvsService } from 'src/app/services/cvs.service';
import { LocationService } from 'src/app/services/location.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-manager-cv',
  templateUrl: './manager-cv.component.html',
  styleUrls: ['./manager-cv.component.scss']
})
export class ManagerCvComponent implements OnInit {

  data!:any;
  userId!:any;
  baseUrl: string = "http://localhost:8080/api/v1/downloadFile/";
  dataCareer!:any;
  dataLocation!:any;

  careerId:number = 0;
  locationId:number = 0;

  constructor(private user: AuthService, private token:TokenStorageService, 
    private router:Router, private cv:CvsService,
    private iziToast: Ng2IzitoastService, private career:CareerService, private location:LocationService) {
    this.userId = token.getUserId();
   }

  ngOnInit() {
    if(this.userId != null){
      this.fetchCvByUsers();
    }else{
      this.router.navigateByUrl("/");
    }
    this.fetchAllCareer();
    this.fetchAllLocation();
  }

  fetchAllCareer(){
    this.career.getAllCareers().subscribe(
      (et)=>{
        this.dataCareer = et.data;
      }
    );
  }

  fetchAllLocation(){
    this.location.getAllLocations().subscribe(
      (et)=>{
        this.dataLocation = et.data;
      }
    );
  }

  fetchCvByUsers(){
    this.user.getCvsUser(Number(this.userId)).subscribe(
      (et)=>{
        this.data = et.data;

      }
    );
  }


  changeSecurity(idNew,security){
    this.cv.changeSecurity(Number(idNew),security).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Thay đổi trạng thái thành công!.',
          position: 'topRight'
        });
        this.fetchCvByUsers();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Thay đổi trạng thái thất bại!.',
          position: 'topRight'
        });
      }
    );
  }

  forward(){
    if(this.careerId == 0 || this.locationId == 0){
      this.iziToast.warning({
        title: 'Cảnh báo!',
        message: 'Hãy lựa chọn ngành nghề và làm việc!.',
        position: 'topRight'
      });
    }else{
      this.router.navigateByUrl("/create-cv?idCareer="+this.careerId+"&locationId="+this.locationId);
    }

  }

  delete(idCv){
    this.cv.deleteCv(Number(this.userId),Number(idCv)).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Đã xóa thành công!.',
          position: 'topRight'
        });
        this.fetchCvByUsers();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Xóa thất bại!.',
          position: 'topRight'
        });
      }
    );
  }


}
