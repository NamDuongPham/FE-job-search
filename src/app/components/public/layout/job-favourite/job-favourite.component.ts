import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-job-favourite',
  templateUrl: './job-favourite.component.html',
  styleUrls: ['./job-favourite.component.css']
})
export class JobFavouriteComponent implements OnInit {

  userId!:any;
  data!:any;
  constructor(private token:TokenStorageService, private auth:AuthService) { 
    this.userId = this.token.getUserId();
  }

  ngOnInit() {
    this.auth.getAllFavourite(Number(this.userId)).subscribe(
      (et)=>{
        this.data = et.data;
      }
    );
  }

}
