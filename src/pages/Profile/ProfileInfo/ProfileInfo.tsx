import React, { useContext, useState } from "react";
import {
  Button,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

import { AppContext } from "@context";

import { ProfileInfoProps } from "./ProfileInfo.props";
import { CreateCollection } from "../Create-Collection";

const ProfileInfo: React.FC<ProfileInfoProps> = () => {
  const { user } = useContext(AppContext);
  const { email, firstName, lastName } = user || {};
  const [showModal, setShowModal] = useState(false);

  return (
    <Stack direction="column" spacing={1} p={2} alignItems="center">
      <CreateCollection open={showModal} onClose={() => setShowModal(false)} />
      <CardMedia
        sx={{ maxWidth: 1 / 3 }}
        component="img"
        image={"https://dollars-bbs.org/art/thumb/1324355820879s.jpg"}
      />
      <CardContent>
        <Typography>{email}</Typography>
        <Typography>{firstName}</Typography>
        <Typography>{lastName}</Typography>
      </CardContent>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setShowModal(true)}
      >
        Add Collection
      </Button>
    </Stack>
  );
};

export { ProfileInfo };
