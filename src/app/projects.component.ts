import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent implements OnInit{
  projects: Project[];
	Pather1: string;
	Pather2: string; 
	Pather3: string;
	Pather4: string;

  constructor(private projectService: ProjectService, private router: Router){
		this.Pather1 = "assets/img/Base.png";
		this.Pather2 = "assets/img/Base.png"; 
		this.Pather3 = "assets/img/Base.png";
		this.Pather4 = "assets/img/Base.png";		
	}

  getProjects(): void{
    this.projectService.getProjects()
			.then(projects => 
				{this.projects = projects, 
				this.Pather1 = projects[0].P1,
				this.Pather2 = projects[0].P2,
				this.Pather3 = projects[0].P3,
				this.Pather4 = projects[0].P4
				return this.projects});
  }

  ngOnInit(): void{ 
    this.getProjects();		
  }
	
	selectProj(id){
		id = id - 1;
		this.Pather1 = this.projects[id].P1;
		this.Pather2 = this.projects[id].P2;
		this.Pather3 = this.projects[id].P3;
		this.Pather4 = this.projects[id].P4;
	}
	
  gotoDetail(id:string): void {
    this.router.navigate(['/detail', id]);
  }
}