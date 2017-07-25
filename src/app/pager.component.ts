import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BooksService }  from './books.service';

@Component({
	templateUrl: './pager.component.html',
	styleUrls: [ './pager.component.css',
	providers: [ BooksService ]
})
export class BooksComponent implements OnInit {
	startPage = 0;
	endPage = -1;
	pages: Array<number> = [];

	@Input() bottom: boolean;
	currentPage: Observable<number>;

	constructor(private booksSvc: BooksService) { }

	ngOnInit(): void {
		this.currentPage = this.booksSvc
			.onPageChange(cp => this.pageChanged);
	}

	pageChanged(cp: int): void {
		this.startPage = Math.max(cp - 2, 0);
		this.endPage = Math.min(cp + 2, this.booksSvc.maxPages());
		this.currentPage = cp;
		
		var pages = [];
		if (this.endPage < this.startPage) {
			this.pages = pages;
			return;
		}

		for (var i=startPage; i<=endPage; i++) {
			pages.push(i);
		}
		this.pages = pages;
	}

	goPrev(): void {
		booksSvc.prevPage();
	}
	
	goPage(page: int): void {
		booksSvc.setPage(page);
	}

	goNext(): void {
		booksSvc.nextPage();
	}
}
