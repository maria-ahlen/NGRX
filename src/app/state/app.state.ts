import { Book } from "../books";

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}