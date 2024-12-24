import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { AuthService } from 'src/app/services/auth.service';
import { CompaniesService } from 'src/app/services/companies.service';
import { CvsService } from 'src/app/services/cvs.service';
import { NewsService } from 'src/app/services/news.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';



@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css']
})
export class NewDetailComponent implements OnInit {


  id!:any;
  title!:string;
  time!:any;
  local!:string;
  skill!:string;
  wage!:number;
  des!:string;
  tokenUs!:any;
  level!:string;


  address!:string;
  image!:string;
  nameCom!:string;

  datas:any;
  idUser!:any;
  isToken!:any;
  idCv!:any;

  dataCv!:any;



  constructor(private route:ActivatedRoute,private detail: NewsService, 
    private token:TokenStorageService, private comns: CompaniesService,
    private user:AuthService, private iziToast: Ng2IzitoastService) {
    this.tokenUs = token.getToken();
    if(this.route.snapshot.params[`id`]){
      this.id = this.route.snapshot.params[`id`];
    } 

    this.idUser = this.token.getUserId();
    this.isToken = this.token.getToken();

  }

  ngOnInit() {
    this.detail.getNewByIdNew(Number(this.id)).subscribe(
      (et)=>{
        this.title = et.data.titleNew;
        this.time = et.data.timeNews;
        this.local = et.data.localName;
        this.skill = et.data.skill;
        this.wage = et.data.wage;
        this.des = et.data.describeNew;
        this.level = et.data.level;
      },()=>{

      }
    );
    this.fetchInfo();
    this.fetchCV();
  }

  fetchCV(){
    this.user.getCvsUser(Number(this.idUser)).subscribe(
      (et)=>{
        this.dataCv = et.data;
      }
    );
  }

  fetchInfo(){
    this.comns.getCompanyByIdNews(Number(this.id)).subscribe(
      (ets)=>{
        this.datas = ets;
      }
    );
  }

  apply(){
    this.detail.applyNews(Number(this.id),Number(this.idCv)).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Ứng tuyển thành công!.',
          position: 'topRight'
        });
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Lỗi thêm ứng tuyển thất bại!.',
          position: 'topRight'
        });
      }
    );
  }

  addJob(){
    this.user.addFavourite(Number(this.idUser),Number(this.id)).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Hãy nộp cv ngay nhé!.',
          position: 'topRight'
        });
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Lỗi thêm công việc yêu thích thất bại!.',
          position: 'topRight'
        });
      }
    );
  }

  nontify(){
    this.iziToast.warning({
      title: 'Vui lòng đăng nhập!',
      message: 'Hãy đăng nhập để ứng tuyển công việc ngay nhé!.',
      position: 'topRight'
    });
  }

}
