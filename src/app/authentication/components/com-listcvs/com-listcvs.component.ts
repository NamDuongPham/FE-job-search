import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { CompaniesService } from 'src/app/services/companies.service';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-com-listcvs',
  templateUrl: './com-listcvs.component.html',
  styleUrls: ['./com-listcvs.component.css']
})
export class ComListcvsComponent implements OnInit {

  comId:any;
  data!:any;

  baseUrl: string = "http://localhost:8080/api/v1/downloadFile/";

  constructor(private token:TokenStorageService, private com:CompaniesService, private iziToast: Ng2IzitoastService) { 
    this.comId = this.token.getComId();
  }

  ngOnInit() {
    this.fetchAll();
  }

  fetchAll(){
    this.com.getAllCvFavourite(Number(this.comId)).subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }

  delete(idCv){
    this.com.deleteFavourite(this.comId,idCv).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Đã xóa thành công!.',
          position: 'topRight'
        });
        this.fetchAll();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Xóa thất bại!.',
          position: 'topRight'
        });
      }
    );
  }

}
