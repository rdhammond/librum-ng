import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'googleUrl'
})
export class GoogleUrlPipe implements PipeTransform {
	transform(keywords: string): string {
		return 'https://www.google.com/?q=intext%3A%22' + keywords + '%22';
	}
}
