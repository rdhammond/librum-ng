import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AddBookComponent } from './add-book.component';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './books-details.component';
import { HeaderBarComponent } from './header-bar.component';
import { PagerComponent } from './pager.component';
import { SideBarComponent } from './side-bar.component';

import { PageService } from './page.service';
import { DetailsService } from './details.service';

import { AppErrorHandler } from './app.errorhandler';

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
	HeaderBarComponent,
	PagerComponent,
	SideBarComponent
  ],
  providers: [
  	PageService,
	DetailsService,
	{ provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
