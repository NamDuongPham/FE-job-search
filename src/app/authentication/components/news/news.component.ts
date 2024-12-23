import { Component, OnInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  data:any;
  constructor(private news:NewsService,private iziToast: Ng2IzitoastService) { }

  ngOnInit() {
    this.pullNews();
  }

  pullNews(){
    this.news.getAllNews().subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }

  accept(idNew){
    this.news.changeStatusNew(idNew,'success').subscribe(
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
          message: 'Lỗi thêm cty thất bại!.',
          position: 'topRight'
        });
      }
    );
  }

}
