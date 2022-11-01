import { object, array, number, string, SchemaOf } from "yup";

import { Book } from "./book";
import { Tag } from "./tag";
import { User } from "./user";

/**
 * Model of a collection
 */
type Collection = {
  /**
   * Id of the collection
   */
  id: number;
  /**
   * The title of a collection
   */
  title: string;
  /**
   * The thumbnail of a collection
   */
  thumbnail?: string;
  /**
   * Categories
   */
  categories: Array<Tag>;
  /**
   * The creator of a collection
   */
  creator: User;
  /**
   * Created at
   */
  createdAt: string;
  /**
   * Modified at
   */
  modifiedAt: string;
  /**
   * Books in a collection
   */
  books: Array<Book>;
};

type CollectionGroup = {
  /**
   * Collections
   */
  collection: Collection;
  /**
   * Books
   */
  books: Array<Book>;
};

type CreateCollectionValues = {
  title: string;
  thumbnail?: string;
  creatorId?: number;
  bookIds?: Array<number>;
};

export const createCollectionValidationSchema: SchemaOf<CreateCollectionValues> =
  object().shape({
    title: string().required("Title is required"),
    thumbnail: string(),
    creatorId: number(),
    bookIds: array().of(number()).required("Books are required"),
  }) as any;

export type { Collection, CollectionGroup, CreateCollectionValues };
