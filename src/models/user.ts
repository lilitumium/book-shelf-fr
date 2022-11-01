import { Book } from "./book";

/**
 * User model
 */
type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  favoriteBooks: Array<Pick<Book, "id">>;
};

export type { User };
