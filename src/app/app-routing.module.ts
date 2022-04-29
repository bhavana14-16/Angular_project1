import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { AddprojectComponent } from './components/projects/addproject/addproject.component';
import { AllprojectsComponent } from './components/projects/allprojects/allprojects.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SignupComponent } from './components/signup/signup.component';
import { DefaultComponent } from './layout/default/default.component';
// import {ProjectModule} from './components/projects/projects.module';
// import {EmployeeModule} from './components/employee/employee.module';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  
];

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'login', 
//     pathMatch:'full',
//   },
//   {
//     path: 'signup',
//     component:SignupComponent
//   },
//   {
//     path: 'login',
//     component:LoginComponent
//   },
//   {
// 		path: 'projects',
// 		loadChildren: () =>ProjectModule
// 	},
//   {
// 		path: 'employee',
// 		loadChildren: () =>EmployeeModule
// 	},
 
// ];


// const routes: Routes = [{
//   path: '',
//   component: DefaultComponent,
//   children: [{
//     path: '',
//     component: DashboardComponent
//   }, {
//     path: 'projcts',
//     component: ProjectsComponent,
//     children:[{
//       path: 'allprojects',
//       component: AllprojectsComponent
//     },
//     {
//       path: 'addprojects',
//       component: AddprojectComponent
//     }
  
//   ]
//   },
//   {
//     path: 'employee',
//     component: EmployeeComponent
//   },

// ]
  
// }];


@NgModule({
  imports: [RouterModule.forRoot(routes),], //ProjectModule,EmployeeModule
  exports: [RouterModule]
})
export class AppRoutingModule { }
