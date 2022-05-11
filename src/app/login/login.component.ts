import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalstorageserviceService } from '../services/manager/localstorageservice.service';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { Globalconstants } from '../shared/global-constatnts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  responseMessage: any;
  // ngxService: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackbarservice: SnackbarService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private localstorage: LocalstorageserviceService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        null,
        [Validators.required, Validators.pattern(Globalconstants.emailRegex)],
      ],
      password: [null, [Validators.required]],
    });
  }

  handleSubmit() {
    // this.ngxService.start
    var formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password,
    };
    this.userService.login(data).subscribe(
      (response: any) => {
        this.dialogRef.close();
        this.localstorage.setData("manager",response.data)
        this.responseMessage = response?.message;
        this.snackbarservice.openSnackBar(this.responseMessage, '');
         this.router.navigate(['/cafe/dashboard']);
        console.log("responce",response)
      },
      (error) => {
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = Globalconstants.genricError;
        }
        this.snackbarservice.openSnackBar(
          this.responseMessage,
          Globalconstants.error
        );
      }
    );
  }
}
