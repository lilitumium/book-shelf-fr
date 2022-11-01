import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Container, Grid, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";

import { Cover, FavoritesButton } from "@components";
import { AppContext } from "@context";
import { fetchCollectionById, QUERYKEY } from "@api";
import { CoverType } from "@models";

import { CollectionPageProps } from "./Collection-Page.props";

/**
 * Renders CollectionPage
 */
const CollectionPage: React.FC<CollectionPageProps> = ({}) => {
  const { user, onAddToFavorites } = useContext(AppContext);
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useQuery([QUERYKEY.CollectionById], () =>
    fetchCollectionById(id as string)
  );

  const { title, thumbnail, createdAt, books } = data || {};

  const authors = new Set(books?.map(({ authors }) => authors));
  const categories = new Set(books?.map(({ categories }) => categories));
  const formatedDate = dayjs(createdAt).format("DD.MM.YYYY");

  return (
    <Container maxWidth="md">
      <Stack spacing={4}>
        <Grid container>
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <img src={thumbnail || books?.[0]?.thumbnail} alt="Book" />
          </Grid>
          <Grid ml="auto" item xs={7}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={4}
            >
              <Typography variant="h2">{title}</Typography>
              {/* <FavoritesButton
              isFavorite={isFavorite}
              onAddToFavorites={() => handleAddToFavorites(bookId)}
            /> */}
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
              <Typography variant="h6">Created:</Typography>
              <Typography variant="h6" fontWeight={400}>
                {formatedDate}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack spacing={2}>
          <Typography variant="h4">Books in the collection</Typography>
          <Grid container spacing={2}>
            {books?.map((book) => {
              const {
                id,
                title,
                thumbnail,
                authors,
                published,
                categories,
                collectionId,
              } = book;

              return (
                <Grid item xs={6} key={id}>
                  <Cover
                    id={id}
                    type={CoverType.Book}
                    thumbnail={thumbnail}
                    title={title}
                    authors={authors}
                    published={published}
                    categories={categories}
                    collectionId={collectionId}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
};

export { CollectionPage };
