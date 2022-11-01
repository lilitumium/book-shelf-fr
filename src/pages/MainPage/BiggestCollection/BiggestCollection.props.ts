import { CollectionGroup } from "@models";

interface BiggestCollectionProps {
  /**
   * Array of last added collections
   */
  readonly collectionGroups: Array<CollectionGroup>;
  /**
   * Is Loading
   */
  readonly isLoading: boolean;
}

export type { BiggestCollectionProps };
