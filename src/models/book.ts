import { Comment } from "./comment";

/**
 * Model of a book
 */
type Book = {
  /**
   * Id of the book
   */
  id: number;
  /**
   * The thumbnail of the book
   */
  thumbnail: string;
  /**
   * Title of the book
   */
  title: string;
  /**
   * Authors of the book
   */
  authors?: string;
  /**
   * Publish date of the book
   */
  published?: string;
  /**
   * Tags of the book
   */
  categories: Array<string>;
  /**
   * Collections of the book
   */
  collectionId: Array<string>;
  /**
   * Comments
   */
  comments: Array<Comment>;
};

export type { Book };
