import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-status-cv',
  templateUrl: './status-cv.component.html',
  styleUrls: ['./status-cv.component.css']
})
export class StatusCvComponent implements OnInit {

  idUser:any;
  data!:any;
  constructor(private token:TokenStorageService, private auth:AuthService) { 
    this.idUser = this.token.getUserId();
  }

  ngOnInit() {
    this.auth.getStatusCv(Number(this.idUser)).subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }

}
