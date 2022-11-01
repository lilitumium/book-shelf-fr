import React from "react";
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { Cover } from "@components";

import { BiggestCollectionProps } from "./BiggestCollection.props";
import { useTranslation } from "react-i18next";
import { CoverType } from "../../../models/cover-types";

const BiggestCollections: React.FC<BiggestCollectionProps> = ({
  collectionGroups,
  isLoading,
}) => {
  const { t } = useTranslation();
  if (isLoading) return <CircularProgress />;

  return (
    <Stack spacing={2}>
      <Typography variant="h4">{t("biggestcollections.title")}</Typography>
      <Grid container spacing={2}>
        {collectionGroups?.map(({ collection, books }) => {
          const { id, title, thumbnail, creator, categories } = collection;
          const uniqueBookTags = new Set(
            books.map(({ categories }) => categories)
          );
          const booksTags = [...uniqueBookTags].reduce(
            (acc, curr) => acc.concat(curr),
            []
          );
          const formatedCreator = `${creator?.firstName} ${creator?.lastName}`;

          return (
            <Grid item xs={4} key={id}>
              <Cover
                type={CoverType.Collection}
                id={id}
                title={title}
                thumbnail={thumbnail || books?.[0]?.thumbnail}
                creator={formatedCreator}
                categories={booksTags}
                authors={books?.[0]?.authors}
              />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export { BiggestCollections };
