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
export class NewsService {

constructor(private http:HttpClient) { }

totalNews():Observable<any> {
  return this.http.get(AUTH_API + '/api/v2/total-news', httpOptions);
}

getAllNews():Observable<any>{
  return this.http.get(AUTH_API+'/api/v2/all-new',httpOptions);
}

changeStatusNew(idNew:number,status:string):Observable<any>{
  return this.http.put(AUTH_API+'/api/v2/change-status/'+idNew+'?status='+status,httpOptions);
}

addNew(idCom:number, titleNew:string, describeNew:string,localName:string,skill:string,wage:number,level:string, idLocation:number, idCareer:number):Observable<any>{
  return this.http.post(AUTH_API+'/api/v2/create-news/'+idCom,{titleNew,describeNew,localName,skill,wage,level, idLocation, idCareer},httpOptions);
}

getAllByIdCom(idCom:number):Observable<any>{
  return this.http.get(AUTH_API+'/api/v2/all-new-company/'+idCom,httpOptions);
}

getAllPublicNews():Observable<any>{
  return this.http.get(AUTH_API+'/api/v1/news',httpOptions);
}

getAllPublicNewsPages(params):Observable<any>{
  return this.http.get(AUTH_API+'/public-news',{params});
}

getNewByIdNew(id:number):Observable<any>{
  return this.http.get(AUTH_API+'/api/v1/new/'+id,httpOptions);
}

getTotalFindNews():Observable<any>{
  return this.http.get(AUTH_API+'/api/v1/total-find-news',httpOptions);
}

applyNews(idNews:number, idCv:number):Observable<any>{
  return this.http.get(AUTH_API+'/api/v2/apply/'+idNews+'?idCv='+idCv,httpOptions);
}

updateNew(idNew:number, titleNew:string, describeNew:string,localName:string,skill:string,wage:number,level:string):Observable<any>{
  return this.http.put(AUTH_API+'/api/v2/update-news/'+idNew,{titleNew, describeNew,localName,skill,wage,level},httpOptions);
}

searchNew(keyWord:string, locationId:number, careerId:number, sort:number):Observable<any>{
  return this.http.get(AUTH_API+'/api/v1/search?keyWord='+keyWord+'&locationId='+locationId+'&careerId='+careerId+'&sort='+sort,httpOptions);
}

}
