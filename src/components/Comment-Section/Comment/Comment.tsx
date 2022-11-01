import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  Box
} from "@mui/material";
import dayjs from "dayjs";

import { CommentProps } from "./Comment.props";

/**
 * Renders Comment
 */
const Comment: React.FC<CommentProps> = ({ id, content, user, createdAt }) => {
  const formatedDate = dayjs(createdAt).format("DD.MM.YYYY");

  return (
    <Box sx={{bgcolor: 'background.default'}}>
    <ListItem alignItems="flex-start" >
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography>
            {user?.firstName} {user?.lastName}
          </Typography>
        }
        secondary={
          <Stack>
            <Typography>{content}</Typography>
            <Typography variant="caption">{formatedDate}</Typography>
          </Stack>
        }
      />
    </ListItem>
    </Box>
  );
};

export { Comment };
