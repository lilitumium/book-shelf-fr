import React from "react";
import { Stack } from "@mui/material";
import { useQuery } from "react-query";

import {
  fetchLatestBooks,
  fetchLatestCollections,
  fetchLatestTags,
  QUERYKEY,
} from "@api";
import { Book } from "@models";

import { Tags } from "./Tags";
import { LastAddedBooks } from "./LastAddedBooks";
import { BiggestCollections } from "./BiggestCollection";

const MainPage: React.FC = () => {
  const { isLoading: isBooksLoading, data: latestBooks } = useQuery(
    [QUERYKEY.BOOKS],
    fetchLatestBooks
  );
  const { isLoading: isTagsLoading, data: latestTags } = useQuery(
    [QUERYKEY.TAGS],
    fetchLatestTags
  );
  const { isLoading: isCollectionsLoading, data: latestCollections } = useQuery(
    [QUERYKEY.COLLECTIONS],
    fetchLatestCollections
  );

  return (
    <Stack spacing={4}>
      <Tags isLoading={isTagsLoading} tags={latestTags} />
      <LastAddedBooks
        isLoading={isBooksLoading}
        books={latestBooks as Array<Book>}
      />
      <BiggestCollections
        isLoading={isCollectionsLoading}
        collectionGroups={latestCollections}
      />
    </Stack>
  );
};

export { MainPage };
