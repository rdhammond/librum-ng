import { Component } from '@angular/core';

@Component({
	selector: 'sidebar',
	templateUrl: 'sidebar.component.html',
	styleUrls: ['sidebar.component.css']
})
export class SidebarComponent {
	active: string;

	changeActive(newActive: string) {
		this.active = newActive;
	}
}
