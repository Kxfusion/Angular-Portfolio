import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component'
import { ProjectsComponent } from './projects.component';
import { DetailsComponent } from './details.component';

const appRoutes: Routes = [
{ path: 'projects', component: ProjectsComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'detail/:id', component: DetailsComponent },
{ path: '', redirectTo: '/projects', pathMatch: 'full'}
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}