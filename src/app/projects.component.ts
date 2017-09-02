import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent implements OnInit{
  projects: Project[];
  selectedProj: Project;

  constructor(private projectService: ProjectService, private router: Router){ }

  getProjects(): void{
    this.projectService.getProjects().then(projects => this.projects = projects);
  }

  ngOnInit(): void{
    this.getProjects();
  }
	
	add(name:string): void {
		name = name.trim();
		if (!name) { return; }
		this.projectService.create(name)
				.then(project => {
					this.projects.push(project);
					this.selectedProj = null;
				})
	}

	delete(project: Project): void {
		this.projectService
				.delete(project.id)
				.then(() => {
					this.projects = this.projects.filter(p => p !== project);
					if (this.selectedProj === project) {this.selectedProj = null;}
				});	
	}	

  gotoDetail(id:string): void {
    this.router.navigate(['/detail', id]);
  }
}