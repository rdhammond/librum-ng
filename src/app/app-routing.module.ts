import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { AddBookComponent } from './add-book.component';

const routes: Routes = [
	{ path: '', redirectTo: '/books', pathMatch: 'full' },
	{ path: 'books', component: BooksComponent, outlet: 'main' },
	{ path: 'books/:id', component BooksDetailComponent },
	{ path: 'add-book', component: AddBookComponent, outlet: 'main' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
