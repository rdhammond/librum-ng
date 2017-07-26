import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { AjaxService } from './ajax.service';
import { Book } from './book';
import { Page } from './page';

import $ from 'jquery';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PageService extends AjaxService implements OnInit {
	filter = '';
	page: Page;
	pageChanged = new Subject<Page>();

	constructor PageService(private http: Http) { }

	ngOnInit(): void {
		this.refresh(0);
	}

	loadPreview(cover: any): Promise<string> {
		const url = '/books/cover/preview';
		let formData = new FormData();
		formData.append('cover', cover[0], cover[0].name);
		return this.sendCustomAjax('POST', url, formData);
	}

	private refresh(pageNum: number): void {
		const url = `/books?f=${this.filter}&pn=${pageNum}`;
		this.http
			.get(url)
			.toPromise()
			.then(page => this.page = page);
	}

	setFilter(filter: string): void {
		this.filter = filter;
		this.refresh(0);
	}

	prevPage(): void {
		if (!page || page.current < 1) {
			return;
		}
		this.refresh(page.current - 1);
	}

	setPage(pageNum: number): void {
		this.refresh(pageNum);
	}

	nextPage(): void {
		if (pageNum >= page.max) {
			return;
		}
		this.refresh(pageNum + 1);
	}
}
