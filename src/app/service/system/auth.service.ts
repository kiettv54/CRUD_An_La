import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server:string="http://127.0.0.1:8000/api/auth/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };
  constructor(private http:HttpClient) { }
  login(email:string,password:string){
    return this.http.post<any>(this.server+'login',{email,password},this.httpOptions);
  }
  register(user){

    return this.http.post<any>(this.server+'register',user);
    // .subscribe(res=>{
    //   if(res.user !== ''){
    //     alert("Register is successfully");
    //     this.login(user.email,user.password);

    //   }
    // });
  }
  logout(){
    localStorage.removeItem('access_token');
  }
  public get iSLogin():boolean{
    return localStorage.getItem('access_token')!==null;
  }
  
}
