import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 

  public loginForm  : FormBuilder | any;
  
  constructor(
    private authenticatioService : AuthenticationService,
    private formBuilder: FormBuilder,
    private router : Router) { }
 
  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
  });
  }
  login(){
    if(this.loginForm.valid){
      this.authenticatioService.login(this.loginForm.value).subscribe(result =>{
        this.router.navigate(['dashboard']);
      } , error => {
       console.log(error.error);
      })
    }
  }


}
