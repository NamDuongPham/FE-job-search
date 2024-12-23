import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { NewsService } from 'src/app/services/news.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthURL } from '../../authentication.url';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-com-news',
  templateUrl: './com-news.component.html',
  styleUrls: ['./com-news.component.scss']
})
export class ComNewsComponent implements OnInit {
  idCom:any;
  data:any;
  AppURL = AppURL;
  AuthURL = AuthURL;

  constructor(private token:TokenStorageService, private newSer: NewsService,private iziToast: Ng2IzitoastService) { 
    this.idCom = token.getComId();
  }

  ngOnInit() {
    this.pullNews();
  }

  pullNews(){
    this.newSer.getAllByIdCom(Number(this.idCom)).subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }

  accept(idNew){
    this.newSer.changeStatusNew(idNew,'complete').subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Đã xác nhận thành công!.',
          position: 'topRight'
        });
        this.pullNews();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Xác nhận thất bại!.',
          position: 'topRight'
        });
      }
    );
  }

}
