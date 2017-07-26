import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AjaxService } from './ajax.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BooksService extends AjaxService {
	constructor(private http: Http) { }

	add(book: Book): Promise<Book> {
		const url = '/books';
		let formData = book.toFormData();
		return this.customAjax('POST', url, formData);
	}
}
