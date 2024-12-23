import { Component, OnInit } from '@angular/core';
import { CvsService } from 'src/app/services/cvs.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  data:any;
  baseUrl: string = "http://localhost:8080/api/v1/downloadFile/";
  constructor(private cvs:CvsService) { }

  ngOnInit() {
    this.getPullCvs();
  }

  getPullCvs(){
    this.cvs.getAllCvs().subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }



}
