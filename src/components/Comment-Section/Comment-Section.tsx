import React, { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { List, Stack, Typography } from "@mui/material";

import { addComment, QUERYKEY } from "@api";

import { Comment } from "./Comment";
import { TextArea } from "./Text-Area";
import { CommentSectionProps } from "./Comment-Section.props";
import { AppContext } from "@context";

/**
 * Renders CommentSection
 */
const CommentSection: React.FC<CommentSectionProps> = ({
  comments,
  bookId,
}) => {
  const queryClient = useQueryClient();
  const { user } = useContext(AppContext);
  const { id: userId } = user || {};
  const { mutate } = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERYKEY.BOOKBYID);
    },
  });

  const onSubmit = (value: string) => {
    mutate({
      bookId: bookId,
      userId: userId as number,
      content: value,
    });
  };
  const isComments = comments?.length > 0;

  return (
    <Stack width="100%" p={2} spacing={1}>
      <Typography variant="h5">Comments</Typography>
      {isComments && (
        <Stack direction="column" spacing={1}>
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </Stack>
      )}
      <TextArea onSubmit={onSubmit} />
    </Stack>
  );
};

export { CommentSection };
