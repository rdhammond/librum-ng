import { Pipe, PipeTransform } from '@core/angular';

import { Book } from './book';

@Pipe({
	name: 'coverUrl'
})
export class CoverUrlPipe implements PipeTransform {
	transform(book: Book): string {
		return `/books/${book.id}/cover`;
	}
}
