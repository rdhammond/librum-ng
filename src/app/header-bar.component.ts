import { Component, OnInit } from '@angular/core';
import { BooksService }  from './books.service';

@Component({
	selector: 'header-bar',
	templateUrl: './header-bar.component.html',
	styleUrls: [ './header-bar.component.css' ],
	providers: [ BooksService ]
})
export class SearchBarComponent {
	filter: string;

	constructor(private books: BooksService) { }
	
	apply() {
		this.books.setFilter(filter);
	}
}
