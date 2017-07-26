import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BooksService }  from './books.service';

@Component({
	selector: 'pager',
	templateUrl: './pager.component.html',
	providers: [ BooksService ]
})
export class BooksComponent implements OnInit, OnDestroy {
	@Input() bottom: boolean;

	startPage: number;
	endPage: number;
	pageNums: number[];
	currentPage: number;
	pageChanged: Subscription;

	constructor(private booksSvc: BooksService) { }

	ngOnInit(): void {
		this.pageChanged = this.booksSvc.page()
			.subscribe(page => this.setPages(page.pageNum));
	}

	ngOnDestroy(): void {
		this.pageChanged.unsubscribe();
	}

	setPages(cp: number): void {
		this.startPage = Math.max(cp - 2, 0);
		this.endPage = Math.min(cp + 2, this.booksSvc.maxPages());
		this.currentPage = cp;
		
		var pageNums = [];
		if (this.endPage < this.startPage) {
			this.pageNums = pagesNums;
			return;
		}

		for (var i=startPage; i<=endPage; i++) {
			pageNums.push(i);
		}
		this.pageNums = pageNums;
	}

	goPrev(): void {
		this.booksSvc.prevPage();
	}
	
	goPage(page: number): void {
		this.booksSvc.setPage(page);
	}

	goNext(): void {
		this.booksSvc.nextPage();
	}
}
