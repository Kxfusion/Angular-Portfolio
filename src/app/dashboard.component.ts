import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({

  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  projects: Project[] = [];
  constructor(private projectService: ProjectService){ }
  ngOnInit(): void {
    this.projectService.getProjects()
      .then(projects => this.projects = projects.slice(1,5));
  }
}
