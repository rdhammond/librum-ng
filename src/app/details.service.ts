import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AjaxService } from './ajax.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DetailsService extends AjaxService {
	private book: Book;
	bookChanged = new Subject<Book>();

	constructor(private http: Http) { }

	saveNotes(book: Book): Promise<Book> {
		const url = `/books/${book.id}/notes`;

		// ** TODO: Validation
		return this.http
			.put(url,
				JSON.stringify({notes: book.notes}),
				{headers: this.headers}
			);
			.toPromise()
			.then(() => book);
	}

	setBook(id: string): void {
		const url = `/books/${book.id}`;
		this.http
			.get(url)
			.toPromise()
			.then(res => {
				let book = res.json().data as Book;
				this.book = book;
				this.bookChanged.next(book);
			});
	}
}
