import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  public registerForm  : FormBuilder | any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authenticatioService : AuthenticationService,
    private formBuilder: FormBuilder,
    private router : Router
   ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.registerForm = this.formBuilder.group({
      name:[null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
  });

  }
  signup(){
    if(this.registerForm.valid){
      this.authenticatioService.register(this.registerForm.value).subscribe(result =>{
        this.router.navigate(['login']);
      } , error => {
       console.log(error.error);
      })
    }
  }

}
