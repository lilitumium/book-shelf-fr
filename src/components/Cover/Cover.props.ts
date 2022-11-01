import { CardProps } from "@mui/material";

import { CoverType } from "@models";

interface CoverProps extends Omit<CardProps, "id" | "onClick"> {
  /**
   * Id of the book or collection
   */
  id: number;
  /**
   * Type of the cover
   */
  type: CoverType;
  /**
   * The thumbnail of the book or collection
   */
  thumbnail: string;
  /**
   * Title of the book or collection
   */
  title: string;
  /**
   * Author of the book or collection
   */
  authors?: string;
  /**
   * Publish date of the book
   */
  published?: string;
  /**
   * Creator of the collection
   */
  creator?: string;
  /**
   * Tags of the book
   */
  categories: Array<string>;
  /**
   * Collections of the book
   */
  collectionId?: Array<string>;
}

export type { CoverProps };
