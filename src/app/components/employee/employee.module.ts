import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllemployeeComponent } from './allemployee/allemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeComponent } from './employee.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
      path: 'employee',
      component: EmployeeComponent, 
      children: [
        {
          path: 'allemployee', 
          component: AllemployeeComponent, 
        },
        {
          path: 'addemploye',
          component: AddemployeeComponent,
        },
        {
            path: 'editemploye',
            component: EditemployeeComponent, 
          },
      ],
    },
  ];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [EmployeeComponent,AllemployeeComponent,AddemployeeComponent,EditemployeeComponent]
})
export class AppRoutingModule { }
