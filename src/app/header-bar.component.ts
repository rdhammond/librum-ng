import { Injectable, Component } from '@angular/core';
import { BooksService }  from './books.service';

@Component({
	selector: 'header-bar',
	templateUrl: './header-bar.component.html',
	styleUrls: [ './header-bar.component.css' ],
	providers: [ BooksService ]
})
export class SearchBarComponent {
	filter = '';

	constructor(private books: BooksService) { }
	
	onFilter() {
		this.books.setFilter(filter);
		this.books.refresh();
	}
}
