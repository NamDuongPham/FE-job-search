import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-com-table',
  templateUrl: './com-table.component.html',
  styleUrls: ['./com-table.component.css']
})
export class ComTableComponent implements OnInit {

  data!:any;

  constructor(private com:CompaniesService) { }

  ngOnInit() {
    this.com.publicAllCom().subscribe(
      (et)=>{
        console.log(et);
        this.data = et.data;
      }
    );
  }

}
