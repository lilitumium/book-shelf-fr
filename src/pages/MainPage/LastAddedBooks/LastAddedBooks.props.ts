import { Book } from "@models";

interface LastAddedBooksProps {
  /**
   * Array of last added books
   */
  readonly books: Array<Book>;
  /**
   * Is loading
   */
  readonly isLoading: boolean;
}

export type { LastAddedBooksProps };
