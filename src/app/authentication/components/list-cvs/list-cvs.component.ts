import { Component, OnInit, ɵbypassSanitizationTrustUrl } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { CvsService } from 'src/app/services/cvs.service';

@Component({
  selector: 'app-list-cvs',
  templateUrl: './list-cvs.component.html',
  styleUrls: ['./list-cvs.component.css']
})
export class ListCvsComponent implements OnInit {

  data:any;
  idNews:any;
  baseUrl: string = "http://localhost:8080/api/v1/downloadFile/";

  id!:any;
  status!:string;
  content!:string;

  

  constructor(private cvs:CvsService, private route:ActivatedRoute, private iziToast: Ng2IzitoastService) {
    if(this.route.snapshot.params[`id`]){
      this.idNews = this.route.snapshot.params[`id`];
    } 

   }

  ngOnInit() {
    this.getPullCvs();
  }

  getPullCvs(){
    this.cvs.getCvsByIdNew(Number(this.idNews)).subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }

  accept(id,status,content){
    this.cvs.changeSatus(Number(this.idNews),id,status,content).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Thay đổi trạng thái thành công!.',
          position: 'topRight'
        });
        this.getPullCvs();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Thay đổi trạng thái thất bại!',
          position: 'topRight'
        });
      }
    );
  }

  setValue(id,status,content){
    this.id = id;
    this.status = status;
    this.content = content;
  }

  reaccept(){
    this.cvs.changeSatus(Number(this.idNews),Number(this.id),this.status,this.content).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Thay đổi trạng thái thành công!.',
          position: 'topRight'
        });
        this.getPullCvs();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Thay đổi trạng thái thất bại!',
          position: 'topRight'
        });
      }
    );
  }

}
