import { Component, OnInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { idLocale } from 'ngx-bootstrap';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-mana-location',
  templateUrl: './mana-location.component.html',
  styleUrls: ['./mana-location.component.scss']
})
export class ManaLocationComponent implements OnInit {

  data!:any;
  locationName!:string;
  idLocation!:number;

  constructor(private location:LocationService, private iziToast: Ng2IzitoastService) { }

  ngOnInit() {
    this.fetchLocations();
  }

  fetchLocations(){
    this.location.getAllLocations().subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }

  addLocation(){
    
    this.location.addLocation(this.locationName).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Thêm vị trí thành công!.',
          position: 'topRight'
        });
       this.fetchLocations();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Lỗi thêm vị trí thất bại!.',
          position: 'topRight'
        });
      }
    );
  }

  deleteLocation(idLocation:number){
    this.location.deleteLocation(idLocation).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Xóa vị trí thành công!.',
          position: 'topRight'
        });
       this.fetchLocations();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Lỗi xóa vị trí thất bại!.',
          position: 'topRight'
        });
      }
    );
  }

  updateLocation(idLocation, locationName){
    this.locationName = locationName;
    this.idLocation = idLocation;
  }

  update(){
    this.location.updateLocation(Number(this.idLocation),this.locationName).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Thành công!',
          message: 'Cập nhật vị trí thành công!.',
          position: 'topRight'
        });
        this.idLocation = 0;
        this.locationName = "";
       this.fetchLocations();
      },
      (err)=>{
        this.iziToast.warning({
          title: 'Thất bại!',
          message: 'Cập nhật vị trí thất bại!.',
          position: 'topRight'
        });
      }
    );
  }

}
