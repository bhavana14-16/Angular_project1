
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeloginService {
  url = environment.apiUrl
  constructor(private HttpClient: HttpClient) { }

  loginEmp(data:any){
    return this.HttpClient.post(this.url+"/employee/login",data,{
      headers: new HttpHeaders().set('Content-type',"application/json")
    })
}

}
