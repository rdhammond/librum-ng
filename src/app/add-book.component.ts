import { Component } from '@angular/core';

import { BookService } from './book.service';
import { CoverService } from './cover.service';

import { Book } from './book';

import $ from 'jquery';

@Component({
	templateUrl: './add-book.component.html',
	styleUrls: [ './add-book.component.css' ],
	providers: [ BookService, CoverService ]
})
export class AddBookComponent {
	thumbSrc: string; 
	book: Book;

	constructor(private bookSvc: BookService,
		private coverSvc: CoverService)
	{
		this.reset();
	}

	addBook(): void {
		// ** TODO: Validation
		// ** TODO: Success message
		this.bookSvc
			.add(this.book)
			.then(() => this.reset());
	}

	private reset(): void {
		const DEFAULT_COVER = 'img/generic-book.jpg';

		this.thumbSrc = DEFAULT_COVER;
		this.book = new Book();
	}

	selectCover(): void {
		$('#cover').click();
	}

	loadPreview(): void {
		this.coverSvc
			.loadPreview(this.book.cover)
			.then(base64 => this.thumbSrc = base64);
	}
}
