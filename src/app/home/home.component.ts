import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog :MatDialog,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    
    if(localStorage.getItem('token')!=null){
      this.userService.checkToken().subscribe((response:any)=>{
        this.router.navigate(['/cafe/dashboard']);
      },(error:any)=>{
        console.log(error)
      })
    }
    this.loginAction()
  }

  signupAction(){
    // console.log('test')
    const dialogCofig = new MatDialogConfig();
    dialogCofig.width = "550Px";
    this.dialog.open(SignupComponent,dialogCofig)
  }

  forgotPasswordAction(){
    const dialogCofig = new MatDialogConfig();
    dialogCofig.width = "550Px";
    this.dialog.open(ForgotPasswordComponent,dialogCofig)
  }

  loginAction(){
    const dialogCofig = new MatDialogConfig();
    dialogCofig.width = "550Px";
    this.dialog.open(LoginComponent,dialogCofig)
  }
}
