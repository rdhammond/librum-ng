import { Component, OnInit } from '@angular/core';
import { BooksService }  from './books.service';

import { GoogleUrlPipe } from './google-url.pipe';

import $ from 'jquery';

@Component({
	selector: 'book-details',
	templateUrl: './book-details.component.html',
	styleUrls: [ './book-details.component.css',
	providers: [ BooksService ],
	pipes: [ GoogleUrlPipe ]
})
export class BookDetailsComponent {
	private book: Book;

	constructor(private booksSvc: BooksService) { }

	ngOnInit(): void {
		this.book = booksSvc.details
			.switchMap(book => this.show(book));
	}

	setDetails(book): void {
		if (!book) {
			$('#bookDetails').modal('hide');
			this.book = null;
			return;
		}

		this.book = book;
		$('#bookDetails').modal('show');
	}

	saveNotes(): void {
		this.booksSvc.saveNotes(this.book);
		$('#bookDetails').modal('hide');
	}
}
