import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Grid, Stack, Typography } from "@mui/material";

import { fetchFavoriteBooks, QUERYKEY } from "@api";
import { Cover } from "@components";
import { CoverType } from "@models";
import { AppContext } from "@context";

import { FavoriteBooksProps } from "./FavoriteBooks.props";

const FavoriteBooks: React.FC<FavoriteBooksProps> = () => {
  const { user } = useContext(AppContext);
  const { id } = user || {};
  const { data: favoriteBooks } = useQuery(
    [QUERYKEY.FavoriteBooks],
    () => {
      return fetchFavoriteBooks(id as number);
    },
    { enabled: Boolean(id) }
  );

  return (
    <Stack spacing={2}>
      <Typography variant="h4">Favorite Books</Typography>
      <Grid container spacing={2}>
        {favoriteBooks?.map((book) => {
          const { id, title, thumbnail, authors, published, categories } = book;

          return (
            <Grid item xs={4} key={id}>
              <Cover
                type={CoverType.Book}
                id={id}
                thumbnail={thumbnail}
                title={title}
                authors={authors}
                published={published}
                categories={categories}
                // collectionId={collectionId}
              />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export { FavoriteBooks };
