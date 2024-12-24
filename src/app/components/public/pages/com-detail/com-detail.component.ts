import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-com-detail',
  templateUrl: './com-detail.component.html',
  styleUrls: ['./com-detail.component.css']
})
export class ComDetailComponent implements OnInit {
  
  id!:any;
  tokenUs!:any;
  datas!:any;

  address!:string;
  idCom!:number;
  imageCompany!:string;
  listNews!:string;
  nameCom!:string;

  idUser!:any;

  dataNews!:any;

  constructor(private route:ActivatedRoute, private token:TokenStorageService, private comns: CompaniesService, private router:Router) {
    this.tokenUs = token.getToken();
    if(this.route.snapshot.params[`id`]){
      this.id = this.route.snapshot.params[`id`];
    }

    this.idUser = this.token.getUserId();

   }



  ngOnInit() {
    this.comns.publicDetailCom(Number(this.id)).subscribe(
      (et)=>{
        this.address = et.data.addressCompany;
        this.idCom = et.data.idCompany;
        this.imageCompany = et.data.imageCompany;
        this.listNews = et.data.listNews;
        this.nameCom = et.data.nameCompany;
      }
    );
    this.fectAllNews();
  }

  fectAllNews(){
    this.comns.getAllNewsByCom(Number(this.id)).subscribe(
      (et)=>{
        this.dataNews = et.data;
      }
    );
  }


  openCityInNewWindow(id) {
    // Converts the route into a string that can be used 
    // with the window.open() function
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/new-detail/${id}`])
    );
  
    window.open(url, '_blank');
  }

}
