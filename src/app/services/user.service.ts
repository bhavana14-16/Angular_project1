import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url = environment.apiUrl
  constructor(private HttpClient: HttpClient) { }

  signup(data:any){
    return this.HttpClient.post(this.url+"manager/register",data,{
      headers: new HttpHeaders().set('Content-type',"application/json")
    })
  }

  forgotPassword(data:any){
    return this.HttpClient.post(this.url+"manager/forgotPassword",data,{
      headers: new HttpHeaders().set('Content-type',"application/json")
    })
  }

  login(data:any){
    return this.HttpClient.post(this.url+"manager/login",data,{
      headers: new HttpHeaders().set('Content-type',"application/json")
    })
  }

  checkToken(){
    return this.HttpClient.get(this.url+"manager/checkToken")
}
}