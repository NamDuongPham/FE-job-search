import { Component, OnInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { CompaniesService } from 'src/app/services/companies.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-profile-com',
  templateUrl: './profile-com.component.html',
  styleUrls: ['./profile-com.component.scss']
})
export class ProfileComComponent implements OnInit {

  idUser!:any;
  idCom!:any;
  userName!:string;
  nameCompany!:string;
  moneyInAccount!:number;
  addressCompany!:string;
  image!:any;

  img:File = null;

  constructor(private com:CompaniesService,  private token :TokenStorageService,  private iziToast: Ng2IzitoastService) { 
    this.idCom = this.token.getComId();
    this.idUser = this.token.getUserId();
  }

  ngOnInit() {
    
    this.com.getInfoCompany(Number(this.idCom)).subscribe(
      (et)=>{
        this.userName = et.data.userName;
        this.nameCompany= et.data.nameCompany;
        this.moneyInAccount = et.data.moneyInAccount;
        this.addressCompany = et.data.addressCompany;
        this.image = et.data.imageCompany;
      }
    );
  }

  updateCom(){
    this.com.updateProfile(Number(this.idUser),Number(this.idCom),this.nameCompany,this.addressCompany).subscribe(
      (et)=>{
        this.userName = et.data.userName;
        this.nameCompany= et.data.nameCompany;
        this.moneyInAccount = et.data.moneyInAccount;
        this.addressCompany = et.data.addressCompany;
        this.iziToast.success({
          title: 'Cập nhật thành công!',
          message: 'Cập nhật thông tin công ty thành công.',
          position: 'topRight'
        });
      }
    );
  }

  onConvertImage(event){
   
    this.img = event.target.files[0];
  }

  updateAvatar(){
    this.com.updateImg(Number(this.idCom),this.img).subscribe(
      (et)=>{
        window.location.reload();
        this.iziToast.success({
          title: 'Cập nhật ảnh thành công!',
          message: "Success",
          position: 'topRight'
        });
      },(err)=>{
        this.iziToast.warning({
                  title: 'Lỗi!',
                  message: 'Cập nhật ảnh thất bại!',
                  position: 'topRight'
        })
      }
    );
  }

}
