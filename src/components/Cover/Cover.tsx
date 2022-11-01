import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { CoverType } from "@models";
import { AppContext } from "@context";
import { FavoritesButton } from "@components";

import { CoverProps } from "./Cover.props";

const Cover: React.FC<CoverProps> = (props) => {
  const {
    id,
    type,
    title,
    thumbnail,
    authors,
    creator,
    published,
    categories,
    ...rest
  } = props;
  const isBook = type === CoverType.Book;

  const { user, onAddToFavorites } = useContext(AppContext);
  const navigate = useNavigate();

  const openCover = (id: number) => {
    navigate(isBook ? `/book/${id}` : `/collection/${id}`);
  };

  const handleAddToFavorites = (id: number) => {
    onAddToFavorites(id);
  };

  const isFavorite = user?.favoriteBooks?.some(
    (favoriteBook) => favoriteBook.id === id
  );

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "stretch",
        cursor: "pointer",
        height: 200,
      }}
      onClick={() => openCover(id)}
      {...rest}
    >
      <CardMedia
        component="img"
        height="100%"
        image={thumbnail}
        alt="Book"
        sx={{
          width: 128,
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography gutterBottom variant="body1">
          {authors}
        </Typography>
        <Typography gutterBottom variant="body1">
          {creator}
        </Typography>
        <Typography gutterBottom variant="body1">
          {categories}
        </Typography>
      </CardContent>
      {isBook && (
        <CardActions sx={{ alignItems: "flex-start", pt: 2 }}>
          <FavoritesButton
            isFavorite={isFavorite}
            onAddToFavorites={() => handleAddToFavorites(id)}
          />
        </CardActions>
      )}
    </Card>
  );
};

export { Cover };
