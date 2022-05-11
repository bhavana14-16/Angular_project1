import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { AllemployeeComponent } from './allemployee/allemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    AllemployeeComponent,
    AddemployeeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
