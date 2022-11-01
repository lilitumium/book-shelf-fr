import React from "react";
import { Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { FavoritesButtonProps } from "./Favorites-Button.props";

/**
 * Renders FavoritesButton
 */
const FavoritesButton: React.FC<FavoritesButtonProps> = ({
  isFavorite,
  onAddToFavorites,
  ...rest
}) => {
  const handleAddToFavorites = (e: Event) => {
    e.stopPropagation();

    onAddToFavorites();
  };

  return (
    <Box
      onClick={handleAddToFavorites as any}
      sx={{ cursor: "pointer" }}
      {...rest}
    >
      {isFavorite ? (
        <FavoriteIcon sx={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </Box>
  );
};

export { FavoritesButton };
