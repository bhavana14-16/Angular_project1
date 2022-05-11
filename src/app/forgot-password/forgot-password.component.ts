import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { Globalconstants } from '../shared/global-constatnts';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: any = FormGroup;
  responseMessage: any;
  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackbarservice: SnackbarService,
    private dialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: [
        null,
        [Validators.required, Validators.pattern(Globalconstants.emailRegex)],
      ]
    });
  }

  handleSubmit() {
    // this.ngxService.start
    var formData = this.forgotPasswordForm.value;
    var data = {
      email: formData.email,
    }
    this.userService.forgotPassword(data).subscribe(
      (response: any) => {
        this.responseMessage = response?.message;
        this.dialogRef.close();
        this.snackbarservice.openSnackBar(this.responseMessage, '');
      }, (error) => {
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
    )
  }

}
