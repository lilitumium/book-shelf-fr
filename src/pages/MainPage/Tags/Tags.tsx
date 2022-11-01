import React from "react";
import {
  Typography,
  Button,
  Stack,
  CircularProgress,
  Grid,
} from "@mui/material";
import { TagsProps } from "./Tags.props";
import { useTranslation } from "react-i18next";


const Tags: React.FC<TagsProps> = ({ isLoading, tags }) => {
  const{t}=useTranslation()
  if (isLoading) return <CircularProgress />;

  return (
    <Stack spacing={2}>
      <Typography variant="h4">{t('tags.title')}</Typography>
      <Grid container spacing={2}>
        {tags.map((tag) => {
          const { id, title } = tag;

          return (
            <Grid item key={id}>
              <Button
                variant="outlined"
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                {title}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export { Tags };
