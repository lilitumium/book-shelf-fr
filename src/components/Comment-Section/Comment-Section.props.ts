import { Comment } from "@models";

/**
 * CommentSection Props
 */
interface CommentSectionProps {
  /**
   * The comments to display
   */
  readonly comments: Comment[];
  /**
   * The book id
   */
  readonly bookId: number;
}

export type { CommentSectionProps };
