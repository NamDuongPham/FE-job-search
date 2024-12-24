import { Component, OnInit } from '@angular/core';
import { CareerService } from 'src/app/services/career.service';
import { LocationService } from 'src/app/services/location.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.css']
})
export class FindJobComponent implements OnInit {

  dataNews!:any;

  keyWord:string ="";
  careerId:any = 0;
  locationId:any = 0;

  dataCareer:any;
  dataLocation:any;

  sort:number = 0;

  constructor(private news:NewsService, private career:CareerService, private location:LocationService) { }

  ngOnInit() {
    this.fetchAllNews();
    this.fetchCareer();
    this.fetchLocation();
  }

  fetchAllNews(){
    this.news.getAllPublicNews().subscribe(
      (et)=>{
        console.log(et);
        this.dataNews = et.data;
      }
    );
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

  search(){
    if(this.keyWord == null && this.locationId == 0 && this.careerId == 0 ){
      this.fetchAllNews();
    }else{
      this.news.searchNew(this.keyWord,Number(this.locationId),Number(this.careerId),Number(this.sort)).subscribe(
        (et)=>{
          this.dataNews = et.data;
        }
      );
    }
  }

}
