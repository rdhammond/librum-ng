export class Book {
	title: string;
	author: string
	year: number;
	era: string;
	publisher: string;
	estValue: number;
	notes: string;
	cover: any;

	toFormData(): FormData {
		let data = new FormData();
		for (let key of Object.keys(this)) {
			data.append(key, book[key]);
		}
		return data;
	}
}
