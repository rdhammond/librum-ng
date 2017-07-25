import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BooksService }  from './books.service';

@Component({
	templateUrl: './books.component.html',
	styleUrls: [ './books.component.css',
	providers: [ BooksService ]
})
export class BooksComponent implements OnInit {
	page: Observable<Book[]>;

	constructor(private booksSvc: BooksService) { }

	ngOnInit(): void {
		this.page = this.booksSvc.page
			.switchMap(page => this.page = page);
	}

	showDetails(id: string): void {
		this.booksSvc.setDetails(id);
	}
}
