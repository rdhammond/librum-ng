import { Injectable, Component } from '@angular/core';
import { FilterService }  from './filter.service';

@Component({
	selector: 'search-bar',
	templateUrl: './search-bar.component.html',
	providers: [ FilterService ]
})
export class SearchBarComponent {
	search: string;

	constructor(private filterService: FilterService) { }
	
	onFilter() {
		this.filterService.set(this.search);
	}
}
