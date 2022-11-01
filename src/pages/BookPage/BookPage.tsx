import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
  Paper
} from "@mui/material";

import { fetchBookById, QUERYKEY } from "@api";
import { CommentSection, FavoritesButton } from "@components";
import { AppContext } from "@context";
import { Comment } from "@models";

const BookPage: React.FC = () => {
  const { user, onAddToFavorites } = useContext(AppContext);
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useQuery([QUERYKEY.BOOKBYID], () =>
    fetchBookById(id as string)
  );
  const bookId = Number(id);

  if (isLoading) return <CircularProgress />;

  const handleAddToFavorites = (bookId: number) => {
    onAddToFavorites(bookId);
  };

  const {
    thumbnail,
    title,
    published,
    authors,
    categories,
    collectionId,
    comments,
  } = data || {};
  const isFavorite = user?.favoriteBooks?.some(
    (favoriteBook) => favoriteBook.id === bookId
  );

  //TODO: collections

  return (
    <Container maxWidth="md" >
      <Stack spacing={4}>
        <Grid container>
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <img src={thumbnail} alt="Book" />
          </Grid>
          <Grid ml="auto" item xs={7}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={4}
            >
              <Typography variant="h2">{title}</Typography>
              <FavoritesButton
                isFavorite={isFavorite}
                onAddToFavorites={() => handleAddToFavorites(bookId)}
              />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="h6">Authors:</Typography>
              <Typography variant="h6" fontWeight={400}>
                {authors}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="h6">Tags:</Typography>
              <Typography variant="h6" fontWeight={400}>
                {categories}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="h6">Collections:</Typography>
              <Typography variant="h6" fontWeight={400}>
                {published}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="h6">Published:</Typography>
              <Typography variant="h6" fontWeight={400}>
                {published}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Paper elevation={2}>
        <CommentSection comments={comments as Array<Comment>} bookId={bookId} />
        </Paper>
      </Stack>
      
    </Container>
  );
};

export { BookPage };
