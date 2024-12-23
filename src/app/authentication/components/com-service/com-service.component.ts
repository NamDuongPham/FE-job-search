import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-com-service',
  templateUrl: './com-service.component.html',
  styleUrls: ['./com-service.component.scss']
})
export class ComServiceComponent implements OnInit {

  idCom!:any;
  data!:any;
  constructor(private com:CompaniesService, private token:TokenStorageService) {
    this.idCom = token.getComId();
   }

  ngOnInit() {
    this.com.allBuyServices(Number(this.idCom)).subscribe(
      (et)=>{
        this.data = et.data;
        console.log(et);
      }
    );
  }

}
