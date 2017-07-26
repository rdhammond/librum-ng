import { Headers } from '@angular/http';

export abstract class AjaxService {
	protected headers = new Headers({'Content-Type': 'application/json'});

	protected sendCustomAjax(method, url, formData): Promise<any> {
		return new Promise((res, rej) => {
			let xhr = new XMLHttpRequest();
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						res(JSON.parse(xhr.response));
						return;
					}
					rej(xhr.response);
				}
			};
		});
	}
}
