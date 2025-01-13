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
export class CompaniesService {

constructor(private http:HttpClient) { }

getAllCompanies():Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/get-all-company', httpOptions);
}

getTotal():Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/total-com', httpOptions);
}

getInfoCompany(idCom:number):Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/info/'+idCom, httpOptions);
}

updateProfile(id:number,idCom:number,nameCompany:string,addressCompany:string):Observable<any> {
  return this.http.put(AUTH_API + '/api/v2/update-company/'+id+'?idCom='+idCom,{nameCompany,addressCompany}, httpOptions);
}


buyServices(serviceId:number, comId:number):Observable<any> {
  return this.http.get(AUTH_API+'/api/v2/buy-services?serviceId='+serviceId+'&comId='+comId,httpOptions);
}

allBuyServices(idCom:number):Observable<any> {
  return this.http.get(AUTH_API+'/api/v2/all-buy-services/'+idCom,httpOptions);
}

updateImg(idCom:number,file) {
  const formData = new FormData();
  formData.append('file', file, file.name);
  return this.http.post(AUTH_API + '/api/v2/image-company/'+idCom, formData);
}

getCompanyByIdNews(idNews:number){
  return this.http.get(AUTH_API+'/api/v1/infoCom/'+idNews,httpOptions);
}

publicAllCom():Observable<any>{
  return this.http.get(AUTH_API+'/api/v1/all-coms',httpOptions);
}

publicDetailCom(idCom:number):Observable<any>{
  return this.http.get(AUTH_API+'/api/v1/infoCom-detail/'+idCom,httpOptions);
}

addCvFavourite(idCom:number, idCv:number):Observable<any> {
  return this.http.put(AUTH_API + '/api/v2/add-favourite/'+idCom+'?idCv='+idCv,{}, httpOptions);
}

getAllCvFavourite(idCom:number):Observable<any>{
  return this.http.get(AUTH_API+'/api/v2/get-cvs-favourite/'+idCom,httpOptions);
}

getAllNewsByCom(idCom:number):Observable<any>{
  return this.http.get(AUTH_API+'/api/v1/all-news-by-com/'+idCom,httpOptions);
}

deleteFavourite(idCom:number, idCv:number):Observable<any>{
  return this.http.delete(AUTH_API+'/api/v2/delete-favourite/'+idCv+'?idCom='+idCom,httpOptions);
}

}
