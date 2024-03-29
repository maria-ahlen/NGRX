import { createReducer, on } from '@ngrx/store';
import { retrievedBookList } from './books.action';
import { Book } from '../books';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => {return books})
);