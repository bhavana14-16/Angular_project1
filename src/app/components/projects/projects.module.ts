import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { AddprojectComponent} from './addproject/addproject.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
    {
      path: 'projects',
      component: ProjectsComponent, 
      children: [
        {
          path: 'allprojects', 
          component: AllprojectsComponent, 
        },
        {
          path: 'addproject',
          component: AddprojectComponent,
        },
      ],
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
