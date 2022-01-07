import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { retrievedBookList, addBook, removeBook } from './state/books.action';
import { GoogleBooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private booksService: GoogleBooksService, private store: Store) {}
  
  books$ = this.store.select(selectBooks)!;
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  ngOnInit() {
    this.booksService.getBooks().subscribe(
      (books) => this.store.dispatch(retrievedBookList({ books }))
    );
  }
}
