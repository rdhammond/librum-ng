import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DetailsService }  from './details.service';

import { CoverUrlPipe } from './cover-url.pipe';
import { GoogleUrlPipe } from './google-url.pipe';

import { Book } from './book';

import $ from 'jquery';

@Component({
	selector: 'book-details',
	templateUrl: './book-details.component.html',
	styleUrls: [ './book-details.component.css' ],
	providers: [ DetailsService ],
	pipes: [ CoverUrlPipe, GoogleUrlPipe ]
})
export class BookDetailsComponent implements OnInit, OnDestroy {
	book: Book;
	bookChanged: Subscription;

	constructor(private detailsSvc: DetailsService) { }

	ngOnInit(): void {
		this.bookChanged = this.detailsSvc.bookChanged()
			.subscribe(book => this.show(book));
	}

	ngOnDestroy(): void {
		this.bookChanged.unsubscribe();
	}

	show(book: Book): void {
		if (!book) {
			this.close();
			return;
		}

		this.book = book;
		$('#bookDetails').modal('show');
	}

	close(): void {
		$('#bookDetails').modal('hide');
		this.book = new Book();
	}

	saveNotes(): void {
		this.detailsSvc.saveNotes(this.book)
			.then(() => this.close());
	}
}
