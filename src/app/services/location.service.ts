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
export class LocationService {

constructor(private http:HttpClient) { }

getAllLocations():Observable<any>{
  return this.http.get(AUTH_API+'/api/v1/all-location',httpOptions);
}

addLocation(nameLocation:string):Observable<any>{
  return this.http.post(AUTH_API+'/api/v2/add-location',{nameLocation},httpOptions);
}

deleteLocation(idLocation:number):Observable<any>{
  return this.http.delete(AUTH_API+'/api/v2/delete-location/'+idLocation,httpOptions);
}

updateLocation(idLocation:number,nameLocation:string):Observable<any>{
  return this.http.put(AUTH_API+'/api/v2/update-location/'+idLocation,{nameLocation},httpOptions);
}



}
