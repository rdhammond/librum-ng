import { Pipe, PipeTransform } from '@core/angular';

import { Book } from './book';

@Pipe({
	name: 'thumbnailUrl'
})
export class ThumbnailUrlPipe implements PipeTransform {
	transform(book: Book): string {
		return `/books/${book.id}/thumbnail`;
	}
}
