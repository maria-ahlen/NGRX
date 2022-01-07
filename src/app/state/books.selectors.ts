import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../books';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: ReadonlyArray<Book>, collection: ReadonlyArray<string>) => {
    const value = [...collection].map((id: string) => [...books].find((book: Book) => book.id === id));
    return value;
  }
);
