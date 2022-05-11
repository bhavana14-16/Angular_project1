import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { AllemployeeComponent } from './employee/allemployee/allemployee.component';
import { AddprojectComponent } from './projects/addproject/addproject.component';
import { AddtaskComponent } from './projects/addtask/addtask.component';
import { AllprojectsComponent } from './projects/allprojects/allprojects.component';
import { ManagerguardGuard } from '../guards/managerguard.guard';

export const MaterialRoutes: Routes = [
 
    {  path:'addproject', component:AddprojectComponent, canActivate: [ManagerguardGuard] },
    {  path:'allprojects', component:AllprojectsComponent, canActivate: [ManagerguardGuard] },
    {  path:'addtask', component:AddtaskComponent, canActivate: [ManagerguardGuard] },
    {  path:'allemployee', component:AllemployeeComponent, canActivate: [ManagerguardGuard] },
    {  path:'addemployee', component:AddemployeeComponent, canActivate: [ManagerguardGuard]
    }
];
