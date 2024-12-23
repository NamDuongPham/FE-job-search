import { Component, OnInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'app-mana-career',
  templateUrl: './mana-career.component.html',
  styleUrls: ['./mana-career.component.scss']
})
export class ManaCareerComponent implements OnInit {

  data!:any;
  careerName!:string;
  idCareer!:number;

  constructor(private careers :CareerService, private iziToast: Ng2IzitoastService) { }

  ngOnInit() {
    this.fetchCareer();
  }

  fetchCareer(){
    this.careers.getAllCareers().subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }

  deleteCareer(idCareer){
    this.careers.deleteCareer(Number(idCareer)).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Xóa ngành thành công!.',
          position: 'topRight'
        });
       this.fetchCareer();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Xóa ngành thất bại vị trí thất bại!.',
          position: 'topRight'
        });
      }
    );
  }

  addCareer(){
    this.careers.addCareer(this.careerName).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Thêm ngành thành công!.',
          position: 'topRight'
        });
       this.fetchCareer();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Thêm ngành thất bại vị trí thất bại!.',
          position: 'topRight'
        });
      }
    );
    
  }


  updateCareer(idCareer,nameCareer){
    this.idCareer = idCareer;
    this.careerName = nameCareer;
  }

  update(){
    this.careers.updateCareer(Number(this.idCareer),this.careerName).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Cập nhật ngành thành công!.',
          position: 'topRight'
        });
       this.fetchCareer();
       this.idCareer = 0;
       this.careerName = "";
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Cập nhật thất bại vị trí thất bại!.',
          position: 'topRight'
        });
      }
    );
  }




  

}
