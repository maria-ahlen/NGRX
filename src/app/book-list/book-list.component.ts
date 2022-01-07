import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Input() books: ReadonlyArray<Book> = []!;
  @Output() add = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }
}
