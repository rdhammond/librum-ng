import { Component } from '@angular/core';

@Component({
	selector: 'sidebar',
	templateUrl: 'sidebar.component.html',
	styleUrls: ['sidebar.component.css']
})
export class SidebarComponent {
	const Tabs = {
		Books: 'books',
		AddBook: 'add-book'
	};

	active: string;

	constructor() {
		active = this.Tabs.Books;
	}

	changeActive(newActive: string) {
		this.active = newActive;
	}

	isActive(tab: string): boolean {
		return active === tab;
	}
}
