import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PageService }  from './page.service';

@Component({
	selector: 'pager',
	templateUrl: './pager.component.html',
	providers: [ PageService ]
})
export class BooksComponent implements OnInit, OnDestroy {
	@Input() bottom: boolean;

	private page: Page;
	private pageChanged: Subscription;

	startPage: number;
	endPage: number;
	pageNums: number[];

	get show: boolean {
		return this.pageNums.length > 1;
	}

	get prevDisabled: boolean {
		return this.currentPage > 0;
	}

	get nextDisabled: boolean {
		return this.currentPage >= this.endPage;
	}

	get showFooter: boolean {
		return this.bottom && this.currentPage === this.endPage;
	}

	get currentPage: number {
		return this.page.current;
	}

	get maxPages: number {
		return this.page.max;
	}

	constructor(private pageSvc: PageService) {
		pageNums = [];
	}

	ngOnInit(): void {
		this.pageChanged = this.pageSvc.pageChanged()
			.subscribe(page => this.setPages(page.pageNum));
	}

	ngOnDestroy(): void {
		this.pageChanged.unsubscribe();
	}

	setPages(cp: number): void {
		this.startPage = Math.max(cp - 2, 0);
		this.endPage = Math.min(cp + 2, this.maxPages);
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
		this.pageSvc.prevPage(this.page);
	}
	
	goPage(pageNum: number): void {
		this.pageSvc.setPage(this.page, pageNum);
	}

	goNext(): void {
		this.pageSvc.nextPage(this.page);
	}

	isActive(page: number): boolean {
		return this.currentPage === page;
	}

}
