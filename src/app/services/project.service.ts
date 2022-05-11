import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalstorageserviceService } from '../../../src/app/services/manager/localstorageservice.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = environment.apiUrl;
  localStorage: any;
  httpHeaderOptions: any;

  constructor(private httpClient:HttpClient,private localstorageservice: LocalstorageserviceService) { }


  async setHeadersData() {
    this.localStorage = this.localstorageservice.getData('manager');
    let token = '';
    let Id ='';
    if (this.localStorage) { token = this.localStorage.x_auth_token,Id= this.localStorage._id }
    this.httpHeaderOptions = {
        headers: new HttpHeaders({
            'x-auth-token': token,
            '_id':Id,
            observe: 'response',
          
        })
    };
   // console.log("token",this.localStorage)
}


  addProject(data:any){
    return this.httpClient.post(this.url+"manager/addProject",data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  updateProjectbymanagerId(data:any,id:any){
    return this.httpClient.post(this.url+"manager/updateProject/",data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }
  
  getProjectbymanagerId(){
    return this.httpClient.get(this.url+"manager/GetLists/AllProject")
  }
  
  deleteProject(id:any){
    return this.httpClient.delete(this.url+"manager/deleteProject/",id)
  }

  getallProject(){
    return this.httpClient.get(this.url+"manager/getAllProjects")
  }
  
  getallEmployee(){
    return this.httpClient.get(this.url+"manager/getEmployee")
  }
 
 addtaskByManager(data:any){
  this.setHeadersData();
  return this.httpClient.post(this.url+"manager/addTask",this.httpHeaderOptions),{
    headers: new HttpHeaders().set('Content-Type',"application/json")
  }
 }

 gettaskbymanagerId(_id:any){
  // alert("Hello")
  this.setHeadersData();
  return this.httpClient.get(this.url+"/manager/viewTaskByManagerId"+_id, this.httpHeaderOptions)
 }
}
