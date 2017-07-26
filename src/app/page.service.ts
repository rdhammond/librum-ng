import { Injectable } from '@angular/core';

import { Book } from './book';
import { Page } from './page';

@Injectable()
export class PageService {
	filter: string;
	pageChanged: Subject<Page>;

	constructor PageService() { }

	add(book: Book, coverFile: any): Promise<Page> {
	}

	loadPreview(coverFile: any): Promise<string> {
	}

	setFilter(filter: string): void {
	}

	prevPage(page: Page): void {
	}

	setPage(page: Page, page: number): void {
	}

	nextPage(page: Page): void {
	}
}
