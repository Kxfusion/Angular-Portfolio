import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ProjectSearchComponent } from './project-search.component';
import { ProjectsComponent } from './projects.component';
import { DetailsComponent } from './details.component';
import { ProjectService } from './project.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
		ProjectSearchComponent,
    ProjectsComponent, 
    DetailsComponent
  ],
  imports: [
		NgbModule.forRoot(),
    BrowserModule,
		FormsModule,
    HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ ProjectService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
