import { Routes } from '@angular/router';
import { ManagerguardGuard } from '../guards/managerguard.guard';

import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [{
  path: '',
  component: DashboardComponent,
  canActivate: [ManagerguardGuard]
}];
