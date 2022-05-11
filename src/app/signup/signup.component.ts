import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { Globalconstants } from '../shared/global-constatnts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: any = FormGroup;
  responseMessage: any;
 // ngxService: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackbarservice: SnackbarService,
    private dialogRef: MatDialogRef<SignupComponent>
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [
        null,
        [Validators.required, Validators.pattern(Globalconstants.nameRegex)],
      ],
      email: [
        null,
        [Validators.required, Validators.pattern(Globalconstants.emailRegex)],
      ],
      password: [null, [Validators.required]],
    });
  }

  handleSubmit() {
    // this.ngxService.start
    var formData = this.signupForm.value;
    var data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    this.userService.signup(data).subscribe(
      (response: any) => {
        this.dialogRef.close();
        this.responseMessage = response?.message;
        this.snackbarservice.openSnackBar(this.responseMessage, '');
        this.router.navigate(['/']);
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
