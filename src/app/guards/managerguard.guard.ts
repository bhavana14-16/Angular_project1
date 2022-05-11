import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageserviceService } from '../services/manager/localstorageservice.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerguardGuard implements CanActivate {

  userData: any;
    constructor(
        private localStorageServive: LocalstorageserviceService,
        private router: Router,
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     // console.log("hello fromguard")
      this.userData = this.localStorageServive.getData("manager")
      //console.log("this.userData",this.userData)
      if(!this.userData)
      {
          this.router.navigate(['/']);
          return true;
        }   
        return true;
  }
  
  
}
