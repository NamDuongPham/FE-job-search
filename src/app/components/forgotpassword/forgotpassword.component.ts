import { Component, OnInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {AuthURL} from 'src/app/authentication/authentication.url';

import jwtDecode from 'jwt-decode';
import { AppURL } from 'src/app/app.url';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  roles: any;
  username!: string;
  email!: string;


  constructor(

    private iziToast: Ng2IzitoastService,
    private router: Router,
    private auth: AuthService,
    private token : TokenStorageService,
  
   
  ) {

    if (this.token.getToken() != null) {
        this.auth.setLogin(true);
    }
  }
  ngOnInit(): void {

  }


  reset()
  {
    this.auth.reset(this.username,this.email).subscribe(
      (data) => {
        alert('Reset password success');
        this.router.navigate(['/',AppURL.Login]);
        window.location.reload();
      },
      (error) => {
        alert('Reset failed');
      }
    );
  }

}