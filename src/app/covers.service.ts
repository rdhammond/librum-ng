import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AjaxService } from './ajax.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoversService extends AjaxService {
	constructor(private http: Http) { }

	loadPreview(cover: any): Promise<string> {
		let formData = new FormData();
		formData.append('cover', cover[0], cover[0].name);

		return this.customAjax('POST', url, formData)
			.then(json => return json.src);
	}
}
