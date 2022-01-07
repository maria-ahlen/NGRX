import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css'],
})
export class BookCollectionComponent implements OnInit {
  @Input() books: ReadonlyArray<Book> = []!;
  @Output() remove = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
