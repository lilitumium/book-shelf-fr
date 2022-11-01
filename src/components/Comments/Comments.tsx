import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import { CommentsProps } from "./Comments.props";
import { Stack } from "@mui/system";

const Comments: React.FC<CommentsProps> = (props) => {
    const { avatar, name, comment } = props;

  return (
    <Card 
    variant="outlined"
    elevation={6}
    sx={{
      mx:6,
      display: "flex",
      alignItems: "center",
      width:610,
      height:150,
    }}
    > 
      <Stack 
        direction="column" 
        spacing={0}
        justifyContent="center"
        alignItems="center"
        sx={{mx:'6px',
             width:130
             }}
        >
        <Typography variant="body1">{name}</Typography>
        <CardMedia
          component="img"
          height="110"
          image={avatar}
          sx={{
            objectFit: "contain",
          }}
        />
      </Stack>
        <Box sx={{width:450, height:130, border:'1px dashed'}}>
        <CardContent sx={{ width:450}}>
          <Typography variant="h6">{comment}</Typography>
        </CardContent> 
        </Box>
    </Card>
  );
};

export { Comments };
