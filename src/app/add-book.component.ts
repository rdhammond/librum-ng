import { Component } from '@angular/core';
import { PageService }  from './page.service';

import { Book } from './book';

import $ from 'jquery';

@Component({
	templateUrl: './add-book.component.html',
	styleUrls: [ './add-book.component.css' ],
	providers: [ PageService ]
})
export class AddBookComponent {
	thumbSrc: string;
	book: Book;
	coverFile: any;

	constructor(private pageSvc: PageService) {
		this.reset();
	}

	addBook(): void {
		// ** TODO: Validation
		// ** TODO: Success message
		this.pageSvc
			.add(this.book, this.coverFile)
			.then(() => this.reset());
	}

	private reset(): void {
		const DEFAULT_COVER: string = 'img/generic-book.jpg';

		this.thumbSrc = DEFAULT_COVER;
		this.coverFile = null;
		this.book = new Book();
	}

	selectCover(): void {
		$('#coverFile').click();
	}

	loadPreview(): void {
		this.pageSvc
			.loadPreview(this.coverFile)
			.then(base64 => this.thumbSrc = base64);
	}
}
