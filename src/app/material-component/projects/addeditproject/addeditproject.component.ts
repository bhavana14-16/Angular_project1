import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core/datetime';
import { Router } from '@angular/router';
import { LocalstorageserviceService } from 'src/app/services/manager/localstorageservice.service';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-addeditproject',
  templateUrl: './addeditproject.component.html',
  styleUrls: ['./addeditproject.component.scss']
})
export class AddeditprojectComponent implements OnInit {

  public taskForm  : FormBuilder | any;
  projectList : any;
  Response : any;
  employeeList: any;
  
  constructor(
    private localstorage: LocalstorageserviceService,
    private projectService:ProjectService,
    private formBuilder: FormBuilder,
    private router : Router) {
   //   { provide: MAT_DATE_LOCALE useValue: 'en-GB' }
    }

  ngOnInit(): void {
    this.initForm();
    this.getProjectList();
    this.getEmployeeList();
   // this.addProjectTask();
  }

  initForm(){
    this.taskForm = this.formBuilder.group({
      taskName: [null, [Validators.required, Validators.email]],
      taskStartDate: [null, Validators.required],
      taskEndDate:[null, Validators.required],
      taskDescription:[null, Validators.required],
      projectId:[null, Validators.required],
      employeeId:[null, Validators.required],
    })
  }

  getProjectList() {
    this.projectService.getallProject().subscribe(
      Response => {
        this.Response = Response;
        this.projectList =  this.Response.data;
        console.log(this.projectList);      
      } , error => {
        console.log(error);        
      }
    );
  }

  getEmployeeList(){
    this.projectService.getallEmployee().subscribe(
      Response => {
        this.Response = Response;
        this.employeeList =  this.Response.data;
        console.log(this.employeeList);      
      } , error => {
        console.log(error);        
      }
    );
  }

  // addProjectTask(){
  // var formData = this.taskForm.data;
  // var data = {
  //   //token: formData.token,
  // };
  //   this.projectService.addtaskByManager(data).subscribe(
  //     (Response: any)=> {
  //       this.localstorage.setData("manager",Response.data)
  //       this.Response = Response;
  //       this.employeeList =  this.Response.data;
  //       console.log(this.employeeList);      
  //     } , error => {
  //       console.log(error);        
  //     }
  // );
  // }


  addTask(){
    console.log(this.taskForm.value)
  }
}
