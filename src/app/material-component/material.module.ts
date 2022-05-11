import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialRoutes } from './material.routing';
import { MaterialModule } from '../shared/material-module';
import { ViewBillProductsComponent } from './dialog/view-bill-products/view-bill-products.component';
import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddprojectComponent } from './projects/addproject/addproject.component';
import { AllprojectsComponent } from './projects/allprojects/allprojects.component';
import { AddtaskComponent } from './projects/addtask/addtask.component';
import { AddeditprojectComponent } from './projects/addeditproject/addeditproject.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [
    DragDropModule,
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  declarations: [
    
    ViewBillProductsComponent,
    ConfirmationComponent,
    ProjectsComponent,
    AddprojectComponent,
    AllprojectsComponent,
    AddtaskComponent,
    AddeditprojectComponent
  ],
  exports: [
    MatInputModule
]

})
export class MaterialComponentsModule {}
