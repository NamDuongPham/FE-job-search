import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

const TOKEN_KEY = 'auth-token';
const ROLE_KEY = 'role-name';
const USER_ID  = 'user-id';
const COM_ID = 'com-id';
@Injectable({
    providedIn: 'root'
  })
export class TokenStorageService {

    constructor(private auth: AuthService) { }


    singOut(): void {
      this.auth.setLogin(false);
      window.localStorage.clear();
    }
    
    public saveToken(token: string): void {
    
      window.localStorage.removeItem(TOKEN_KEY);
      window.localStorage.setItem(TOKEN_KEY, token);
    }
    
    getToken(): any {
      return localStorage.getItem(TOKEN_KEY);
    }

    public saveInfo(role:any, userId:any, comId:any):void{
      window.localStorage.setItem(ROLE_KEY, role);
      window.localStorage.setItem(USER_ID, userId);
      window.localStorage.setItem(COM_ID, comId);
    }

    getRoleKey():string{
      return localStorage.getItem(ROLE_KEY);
    }

    getUserId():string{
      return localStorage.getItem(USER_ID);
    }

    getComId():string{
      return localStorage.getItem(COM_ID);
    }

}
