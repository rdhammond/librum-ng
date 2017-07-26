import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DetailsService } from './details.service';
import { PageService }  from './page.service';

import { Book } from './book';

@Component({
	templateUrl: './books.component.html',
	styleUrls: [ './books.component.css' ],
	providers: [ PageService, DetailsService ],
	pipes: [ ThumbnailUrlPipe ]
})
export class BooksComponent implements OnInit, OnDestroy {
	books: Book[] = [];
	pageChanged: Subscription;

	get show: boolean {
		return books.length === 0;
	}

	constructor(private pageSvc: PageService,
		private detailsSvc: DetailsService)
	{ }

	ngOnInit(): void {
		this.pageChanged = this.pageSvc.pageChanged()
			.subscribe(page => this.books = page.books);
	}

	ngOnDestroy(): void {
		this.pageChanged.unsubscribe();
	}

	showDetails(id: string): void {
		this.detailsSvc.setBook(id);
	}
}
