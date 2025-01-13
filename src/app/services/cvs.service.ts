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
export class CvsService {

constructor(private http:HttpClient) { }

totalCvs():Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/total-cvs', httpOptions);
}

getAllCvs():Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/getAll-cvs', httpOptions);
}

getCvsByIdNew(idNew:number):Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/get-cvs/'+idNew, httpOptions);
}

updateCvs(idUSer:number,author:string, data:string, careerId:number, locationId:number):Observable<any> {
  return this.http.post(AUTH_API + '/api/v2/add-cv/'+idUSer, {author,data, careerId, locationId},httpOptions);
}

downloadCvs(uri:string):Observable<Blob>{
  return this.http.get<Blob>(uri, httpOptions);
}

changeSecurity(idNew:number, security:string):Observable<any> {
  return this.http.put(AUTH_API + '/api/v2/change-security/'+idNew+'?security='+security, httpOptions);
}

changeSatus(idNew:number, id:number, status:string, content:string):Observable<any> {
  return this.http.put(AUTH_API + '/api/v2/update-list-cv/'+idNew,{id,status,content}, httpOptions);
}

getAllCvPublic():Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/cv-public', httpOptions);
}

searchCv(keyWord:string, locationId:number, careerId:number):Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/search-cv?keyWord='+keyWord+'&locationId='+locationId+'&careerId='+careerId,httpOptions);
}

deleteCv (idUser:number, idCv:number):Observable<any> {
  return this.http.delete(AUTH_API + '/api/v2/delete-cv/'+idCv+'?idUser='+idUser,httpOptions);
}



}
