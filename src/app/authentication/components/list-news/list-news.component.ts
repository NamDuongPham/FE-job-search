import { Component, OnInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { CareerService } from 'src/app/services/career.service';
import { LocationService } from 'src/app/services/location.service';
import { NewsService } from 'src/app/services/news.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  idCom:any;
  data:any;

  idNew!:number;
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

  constructor(private token:TokenStorageService, private newSer: NewsService,
     private iziToast: Ng2IzitoastService, private career:CareerService, private location:LocationService) { 
    this.idCom = token.getComId();
  }

  ngOnInit() {
      this.fecthNew();
  }

  fecthNew(){
    this.newSer.getAllByIdCom(Number(this.idCom)).subscribe(
      (et)=>{
        console.log(et.data);
        this.data = et.data;
      }
    );
  }

  delete(idNew){
    this.newSer.changeStatusNew(Number(idNew),"delete").subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Đã xóa thành công!.',
          position: 'topRight'
        });
        this.fecthNew();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Xóa bài viết thất bại!.',
          position: 'topRight'
        });
      }
    );
  }

  setValues(idNew,title,des,local,skill,wage,level){
    this.idNew = idNew;
    this.title = title;
    this.des = des;
    this.local = local;
    this.skill = skill;
    this.wage = wage;
    this.level = level;
  }

  update(){
    this.newSer.updateNew(this.idNew,this.title,this.des,this.local,this.skill,Number(this.wage),this.level).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Cập nhật thành công!.',
          position: 'topRight'
        });
        this.fecthNew();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Cập nhật bài viết thất bại!.',
          position: 'topRight'
        });
      }
    );
  }

}
