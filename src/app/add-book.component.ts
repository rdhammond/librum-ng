import { Component } from '@angular/core';
import { BooksService }  from './books.service';

import $ from 'jquery';

const DEFAULT_COVER = 'img/generic-book.jpg';

@Component({
	templateUrl: './add-book.component.html',
	styleUrls: [ './add-book.component.css' ],
	providers: [ BooksService ]
})
export class AddBookComponent {
	thumbSrc: string;
	book: Book;
	coverFile: any;

	constructor(private booksSvc: BooksService) {
		this.reset();
	}

	addBook(): void {
		// ** TODO: Validation
		// ** TODO: Success message
		this.booksSvc
			.add(this.book, this.coverFile)
			.then(() => this.reset());
	}

	private reset(): void {
		this.thumbSrc = DEFAULT_COVER;
		this.coverFile = null;
		this.book = new Book();
	}

	selectCover(): void {
		$('#coverFile').click();
	}

	loadPreview(): void {
		this.booksSvc
			.loadPreview(this.coverFile)
			.then(base64 => this.thumbSrc = base64);
	}
}
