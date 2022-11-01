import React from "react";
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";

import { Cover } from "@components";
import { CoverType } from "@models";

import { LastAddedBooksProps } from "./LastAddedBooks.props";
import { useTranslation } from "react-i18next";

const LastAddedBooks: React.FC<LastAddedBooksProps> = ({
  books = [],
  isLoading,
}) => {
  const { t } = useTranslation();

  if (isLoading) return <CircularProgress />;

  return (
    <Stack spacing={2}>
      <Typography variant="h4">{t("lastaddedbooks.title")}</Typography>
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
            <Grid item xs={4} key={id}>
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
  );
};

export { LastAddedBooks };
