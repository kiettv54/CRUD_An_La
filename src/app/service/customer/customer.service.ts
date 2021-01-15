import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/Models/Customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  server:string="http://127.0.0.1:8000/api/customer/";
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer '+localStorage.getItem('access_token') })
  };
  constructor(private http:HttpClient) { }
 
  getAllCustomer():Observable<any>{
    return this.http.get<any>(this.server+'index',this.httpOptions);
  }
  getCustomer(id:any):Observable<any>{
    return this.http.get<any>(this.server+'show/'+id,this.httpOptions);
  }
  updateCustomer(customer:any,id:any):Observable<any>{
    return this.http.post<any>(this.server+'update/'+id,customer,this.httpOptions);
  }
  deleteCustomer(id:any):Observable<any>{
    return this.http.delete(this.server+'delete/'+id,this.httpOptions);
  }
  addCustomer(customer:any):Observable<any>{
    return this.http.post(this.server+'add',customer,this.httpOptions);
  }
}
