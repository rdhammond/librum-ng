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

	private page = new Page();
	private pageChanged: Subscription;

	startPage: number;
	endPage: number;
	pageRange: number[] = [];

	get show: boolean {
		return this.pageRange.length > 1;
	}

	get prevDisabled: boolean {
		return this.page.current > 0;
	}

	get nextDisabled: boolean {
		return this.page.current >= this.endPage;
	}

	get showFooter: boolean {
		return this.bottom && this.page.current === this.endPage;
	}

	get currentPage: number {
		return this.page.current;
	}

	get maxPages: number {
		return this.page.max;
	}

	constructor(private pageSvc: PageService) { }

	ngOnInit(): void {
		this.pageChanged = this.pageSvc.pageChanged()
			.subscribe(page => {
				this.page = page;
				this.setRange(page);
			});
	}

	ngOnDestroy(): void {
		this.pageChanged.unsubscribe();
	}

	setRange(page: Page): void {
		this.startPage = Math.max(page.current - 2, 0);
		this.endPage = Math.min(page.current + 2, page.max - 1);
		
		if (page.max < 1) {
			this.pageRange = [];
			return;
		}

		let pageRange = [];
		for (let i=startPage; i<=endPage; i++) {
			pageRange.push(i);
		}
		this.pageRange = pageRange;
	}

	goPrev(): void {
		this.pageSvc.prevPage();
	}
	
	goPage(pageNum: number): void {
		this.pageSvc.setPage(pageNum);
	}

	goNext(): void {
		this.pageSvc.nextPage();
	}

	isActive(pageNum: number): boolean {
		return this.currentPage === pageNum;
	}

}
