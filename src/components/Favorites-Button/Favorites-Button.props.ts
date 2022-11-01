import { BoxProps } from "@mui/material";

/**
 * FavoritesButton Props
 */
interface FavoritesButtonProps extends BoxProps {
  /**
   * Is Favorite
   */
  isFavorite?: boolean;
  /**
   * On Add to Favorites
   */
  onAddToFavorites: () => void;
}

export type { FavoritesButtonProps };
