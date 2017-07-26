import { Component } from '@angular/core';
import { PageService }  from './page.service';

@Component({
	selector: 'header-bar',
	templateUrl: './header-bar.component.html',
	styleUrls: [ './header-bar.component.css' ],
	providers: [ PageService ]
})
export class SearchBarComponent {
	filter: string = '';

	constructor(private pageSvc: PageService) { }
	
	apply() {
		this.pageSvc.setFilter(this.filter);
	}
}
