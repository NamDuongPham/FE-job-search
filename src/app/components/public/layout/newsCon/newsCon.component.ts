import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-newsCon',
  templateUrl: './newsCon.component.html',
  styleUrls: ['./newsCon.component.css']
})
export class NewsConComponent implements OnInit {

  dataNews!:any;
 

  constructor(private news:NewsService, private router:Router) { 
  }

  ngOnInit() {

    this.news.getAllPublicNews().subscribe(
      (et)=>{
        this.dataNews = et.data;
      }
    );
  }

  openNewWindow(id) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/new-detail/${id}`])
    );
  
    window.open(url, '_blank');
  }

}
