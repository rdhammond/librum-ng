import { Injectable } from '@angular/core';

@Injectable()
export class DetailsService {
	bookChanged: Subject<Book>;

	constructor() {
	}

	saveNotes(book: Book): Promise<Book> {
	}

	setBook(id: string): void {
	}
}
