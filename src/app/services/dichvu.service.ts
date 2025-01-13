import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const AUTH_API = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
  })
export class DichvuService {

constructor(private http:HttpClient) { }


createServices(nameServices:string,describeService:string, priceService:number, time:number,numberNews:number): Observable<any> {
  return this.http.post(AUTH_API + '/api/v2/create-service', {nameServices,describeService,priceService,time,numberNews}, httpOptions);
}

getAllServices():Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/get-service', httpOptions);
}


}
