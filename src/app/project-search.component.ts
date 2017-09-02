import { Component, OnInit } from '@angular/core';
import { Router }						 from '@angular/router';
import { Observable }				 from 'rxjs/Observable';
import { Subject } 					 from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ProjectSearchService } from './project-search.service';
import { Project }							from './project';

@Component ({
	selector: 'project-search',
	templateUrl: 'project-search.component.html',
	styleUrls: ['project-search.component.css'],
	providers: [ProjectSearchService]
})

export class ProjectSearchComponent {
	projects: Observable<Project[]>;
	private searchTerms = new Subject<string>();
	
	constructor(
		private projectSearchService: ProjectSearchService,
		private router: Router
	) {}
	
	search(term: string): void {
		this.searchTerms.next(term);
	}
	
	ngOnInit(): void {
		this.projects = this.searchTerms
			.debounceTime(300)
			.distinctUntilChanged()
			.switchMap(term => term 
			? this.projectSearchService.search(term)
			: Observable.of<Project[]>([]))
			.catch(error => {
				console.log(error);
				return Observable.of<Project[]>([]);
			});
	}
	
	gotoDetail(project: Project): void {
		let link = ['/detail', project.id];
		this.router.navigate(link);
	}
}