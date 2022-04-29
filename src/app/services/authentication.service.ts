import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {baseApiUrl} from '../../environments/environment'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  // login(data: any):Observable<any>{
  //   console.log("server!!!")
  //   return this.http.post(`${baseApiUrl}manager/login`,data)
  // }
  register(data: any):Observable<any>{
    console.log("server!!!")
    return this.http.post(`${baseApiUrl}manager/register`,data)
  }

  login(data: any): Observable<boolean> {
    return this.http.post<{token: string}>(`${baseApiUrl}manager/login`, data)
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
