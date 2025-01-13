import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
  })
export class CareerService {

constructor(private http:HttpClient) { }

getAllCareers():Observable<any>{
  return this.http.get(AUTH_API+'/api/v1/all-career',httpOptions);
}

addCareer(nameCareer:string):Observable<any>{
  return this.http.post(AUTH_API+'/api/v2/add-career',{nameCareer},httpOptions);
}

deleteCareer(idCareer:number):Observable<any>{
  return this.http.delete(AUTH_API+'/api/v2/delete-career/'+idCareer,httpOptions);
}

updateCareer(idCareer:number, nameCareer:string):Observable<any>{
  return this.http.put(AUTH_API+'/api/v2/update-career/'+idCareer,{nameCareer},httpOptions);
}

}
