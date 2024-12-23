import { Component, OnInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { CareerService } from 'src/app/services/career.service';
import { CompaniesService } from 'src/app/services/companies.service';
import { CvsService } from 'src/app/services/cvs.service';
import { LocationService } from 'src/app/services/location.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-find-cvs',
  templateUrl: './find-cvs.component.html',
  styleUrls: ['./find-cvs.component.css']
})
export class FindCvsComponent implements OnInit {

  data!:any;
  keyWord:string ="";
  careerId:any = 0;
  locationId:any = 0;

  dataCareer:any;
  dataLocation:any;

  idCom!:any;

  baseUrl: string = "http://localhost:8080/api/v1/downloadFile/";

  constructor(private cv:CvsService, private career:CareerService,
     private location:LocationService, private com:CompaniesService,
     private token:TokenStorageService, private iziToast: Ng2IzitoastService) {
      this.idCom = this.token.getComId();
     }

  ngOnInit() {
    this.fetchAllcvPublic();
    this.fetchCareer();
    this.fetchLocation();
  }

  fetchLocation(){
    this.location.getAllLocations().subscribe(
      (et)=>{
        this.dataLocation = et.data;
      }
    );
  }

  fetchCareer(){
    this.career.getAllCareers().subscribe(
      (et)=>{
        this.dataCareer = et.data;
      }
    );
  }

  fetchAllcvPublic(){
    this.cv.getAllCvPublic().subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }

  search(){
    if(this.keyWord==null && this.locationId == 0 && this.careerId == 0 ){
      this.fetchAllcvPublic();
    }else{
      this.cv.searchCv(this.keyWord,Number(this.locationId),Number(this.careerId)).subscribe(
        (et)=>{
          this.data = et.data;
        }
      );
    }
  }

  save(idCv){
    this.com.addCvFavourite(Number(this.idCom),Number(idCv)).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Thêm vào danh sách thành công!.',
          position: 'topRight'
        });
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Thêm vào danh sách thất bại!',
          position: 'topRight'
        });
      }
    );
  }



}
