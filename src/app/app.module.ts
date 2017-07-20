import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { AddBookComponent } from './add-book.component';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './books-details.component';
import { SideBarComponent } from './side-bar.component';
import { SearchBarComponent } from './search-bar.component';

import { BooksService } from './books.service';
import { FilterService } from './filter.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
  	BrowserModule,
	FormsModule,
	AppRoutingModule
  ],
  declarations: [
  	AppComponent,
	AddBookComponent,
	BooksComponent,
	BookDetailsComponent,
	SideBarComponent,
  	SearchBarComponent
  ],
  providers: [ BooksService, FilterService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
