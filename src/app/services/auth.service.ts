import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
  })
export class AuthService {

constructor(private http:HttpClient) { }

  isLogin = false;
  isAdmin = false;


  checkAdmin() {
    // tslint:disable-next-line: variable-name
    const promise = new Promise<boolean>((resovle, _reject) => {
      setTimeout(() => resovle(this.isAdmin), 100);
    });

    return promise;
  }

  setAdmin(isAdmin: boolean) {
    this.isAdmin = isAdmin;
  }

  isAuthenticated() {
    // tslint:disable-next-line: variable-name
    const promise = new Promise<boolean>((_resolve, _reject) => {
      setTimeout(() => _resolve(this.isLogin), 100);
    });
    return promise;
  }

  setLogin(isLogin: boolean): void {
    this.isLogin = isLogin;
  }

  getLogin(): boolean {
    return this.isLogin;
  }

  login(username: string, passwords: string): Observable<any> {
    return this.http.post(AUTH_API + '/api/v1/login', { userName: username, password: passwords }, httpOptions);
  }

  getUserInfo(): Observable<any> {
    return this.http.get(AUTH_API + '/api/v2/info', httpOptions);
  }

  registerCom(usernamer: string, passwordr: string, emailr: string): Observable<any> {
    return this.http.post(AUTH_API + '/api/v1/register-company', {email: emailr, userName: usernamer, password: passwordr }, httpOptions);
  }

  register(usernamer: string, passwordr: string, emailr: string): Observable<any> {
    return this.http.post(AUTH_API + '/api/v1/register', {email: emailr, userName: usernamer, password: passwordr, }, httpOptions);
  }


  changePass(newPassword: string, newPasswordT: string): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.put(AUTH_API + '/api/v2/update-pass', { newPassword, newPasswordT }, httpOptions);
  }

  updateProfile(name: string, numberPhone: string, address: string, id: number): Observable<any> {
    return this.http.post(AUTH_API + '/api/user/update/' + id, { name, numberPhone, address }, httpOptions);
  }

  getAll(params): Observable<any> {
    return this.http.get(AUTH_API + '/api/v2/getAll-users', { params });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(AUTH_API + '/api/user/delete/' + id, httpOptions);
  }

  udpateUser(fullName: string, address: string): Observable<any> {
    return this.http.put(AUTH_API + '/api/v2/update-user', { address , fullName }, httpOptions);
  }

  updateImg(file) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(AUTH_API + '/api/v2/uploadImage', formData);
  }

  totalUser(): Observable<any> {
    return this.http.get(AUTH_API + '/api/v2/total-user', httpOptions);
  }

  getAllUsers():Observable<any> {
    return this.http.get(AUTH_API + '/api/v2/all-users', httpOptions);
  }

  addCompany(username:number, role:number):Observable<any>{
    return this.http.put(AUTH_API + '/api/v2/add-company/'+username+'?role='+role,{},httpOptions);
  }

  changeStatus(userId:number, status:number):Observable<any>{
    return this.http.put(AUTH_API + '/api/v2/changeStatus/'+userId+'?status='+status,{},httpOptions);
  }

  getInfoRoles():Observable<any>{
    return this.http.get(AUTH_API + '/api/v2/get-roles', httpOptions);
  }

  getCvsUser(userId:number):Observable<any>{
    return this.http.get(AUTH_API + '/api/v2/get-cvs-user/'+userId, httpOptions);
  }

  addFavourite(userId:number,newId:number):Observable<any>{
    return this.http.get(AUTH_API + '/api/v2/add-job-favourite/'+userId+'?idNew='+newId, httpOptions);
  }

  getAllFavourite(userId:number):Observable<any>{
    return this.http.get(AUTH_API + '/api/v2/get-all-favourite/'+userId, httpOptions);
  }

  getStatusCv(userId:number):Observable<any>{
    return this.http.get(AUTH_API + '/api/v2/user-cv/'+userId, httpOptions);
  }

  reset(userN:string, emailr: string): Observable<any> {
    return this.http.post(AUTH_API + '/api/v1/reset', {userName:userN,email: emailr }, httpOptions);
  }
}
