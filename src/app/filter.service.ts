import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FilterService {
	private filter = new Subject<string>();
	filterChanged$ = this.filter.asObservable();

	set(newFilter: string) {
		this.filter.next(newFilter);
	}
}
