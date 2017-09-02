import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ProjectService } from './project.service';
import { Project } from './project';



@Component({
  selector: 'Pdetails',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit{
  @Input() project: Project;
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void{
    this.route.paramMap
      .switchMap((params: ParamMap) =>
      this.projectService.getProject(+params.get('id')))
      .subscribe(project => this.project = project);
  }

	save(): void {
		this.projectService.update(this.project)
		.then(() => this.goBack());
	}
	
  goBack(): void{
    this.location.back();
  }
}