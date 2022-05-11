import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../../../services/project.service';
import { LocalstorageserviceService } from '../../../services/manager/localstorageservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddeditprojectComponent } from '../addeditproject/addeditproject.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss'],
})
export class AddtaskComponent implements OnInit {
  displayedColumns: string[] = [
    'taskName',
    'taskStartDate',
    'taskEndDate',
    'actions',
  ];
  dataSource = new MatTableDataSource<any>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    this.dialog.open(AddeditprojectComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
  public taskForm: FormBuilder | any;

  projectList: any;
  Response: any;
  employeeList: any;
  dataList = [];

  constructor(
    private dialog: MatDialog,
    private localstorage: LocalstorageserviceService,
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAlltaskbyId(this.dataList);
  }

  initForm() {
    this.taskForm = this.formBuilder.group({
      taskName: [null, [Validators.required, Validators.email]],
      taskStartDate: [null, Validators.required],
      taskEndDate: [null, Validators.required],
      taskDescription: [null, Validators.required],
      projectId: [null, Validators.required],
      employeeId: [null, Validators.required],
    });
  }

  //   getAlltaskbyId(){
  //   this.projectService.gettaskbymanagerId().subscribe(
  //     Response => {
  //       this.Response = Response;
  //       this.dataList =  this.Response.data;
  //       console.log(this.dataList);
  //     } , error => {
  //       console.log(error);
  //     }
  //   );
  // }
  getAlltaskbyId(data:any) {
    console.log("%%%%%%")
    this.projectService.gettaskbymanagerId(data._id).subscribe(
      (Response:any) => {
        this.dataList = this.Response;
        this.localstorage.setData('manager', Response.data._id);
        var data = sessionStorage.getItem('_id');
        //  Response.data.x_auth_token = token;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
