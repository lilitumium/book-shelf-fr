import { User } from "./user";

/**
 * Comment model
 */
type Comment = {
  id: number;
  content: string;
  createdAt: string;
  bookId: number;
  user: User;
};

/**
 * Add comment Values
 */
type AddCommentValues = {
  content: string;
  userId: number;
  bookId: number;
};

export type { Comment, AddCommentValues };
