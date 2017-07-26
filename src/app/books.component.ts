import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BooksService }  from './books.service';
import { DetailsService } from './details.service';

@Component({
	templateUrl: './books.component.html',
	styleUrls: [ './books.component.css' ],
	providers: [ BooksService, DetailsService ]
})
export class BooksComponent implements OnInit, OnDestroy {
	books: Book[];
	pageChanged: Subscription;

	constructor(private booksSvc: BooksService,
		private detailsSvc: DetailsService)
	{ }

	ngOnInit(): void {
		this.pageChanged = this.booksSvc.page()
			.subscribe(page => this.books = page.books);
	}

	ngOnDestroy(): void {
		this.pageChanged.unsubscribe();
	}

	showDetails(id: string): void {
		this.detailsService.setBook(id);
	}
}
