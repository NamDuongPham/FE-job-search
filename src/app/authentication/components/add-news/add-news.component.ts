import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { AppURL } from 'src/app/app.url';
import { NewsService } from 'src/app/services/news.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthURL } from '../../authentication.url';
import { CareerService } from 'src/app/services/career.service';
import { LocationService } from 'src/app/services/location.service';



@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  idCom:any;
  title!:string;
  des!:string;
  local!:string;
  skill!:string;
  wage!:string; 
  level!:string;

  dataCareer!:any;
  dataLocation!:any;
  idCareer!:any;
  idLocation!:any;

  constructor(private router:Router, private newService:NewsService, private token: TokenStorageService,
     private iziToast: Ng2IzitoastService, private career:CareerService, private location:LocationService) { 
    this.idCom = token.getComId();
  }

  ngOnInit() {
    this.career.getAllCareers().subscribe(
      (et)=>{
        this.dataCareer = et.data;
      }
    );

    this.location.getAllLocations().subscribe(
      (et)=>{
        this.dataLocation = et.data;
      }
    );
  }

  save(){
    if(this.title == null  || this.des == null || this.local == null || this.idCareer == null || this.idLocation == null){
      return this.iziToast.warning({
        title: 'Chưa điền đầy đủ nội dung!',
        message: 'Vui lòng điền đầy đủ nội dung.',
        position: 'topRight'
      });
    }
    this.newService.addNew(Number(this.idCom), this.title,this.des,this.local,this.skill,Number(this.wage),this.level,Number(this.idLocation),Number(this.idCareer)).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Hãy đợi người quản trị website duyệt nhé!.',
          position: 'topRight'
        });
        this.router.navigate(['/',AppURL.Authen,AuthURL.ListNews]);
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Lỗi thêm bài viết thất bại!.',
          position: 'topRight'
        });
      }
    );
  }




}
