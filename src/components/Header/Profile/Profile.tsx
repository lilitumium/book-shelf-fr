import React, { useContext, useRef, useState } from "react";
import { useMutation } from "react-query";
import { Avatar, Box, Button, Menu, MenuItem, Stack } from "@mui/material";

import { AppContext } from "@context";
import { logout } from "@api";

import { ProfileProps } from "./Profile.props";
import { useNavigate } from "react-router-dom";

const Profile: React.FC<ProfileProps> = () => {
  const { mutate: logoutMutate } = useMutation(logout);
  const { user, isAuthorized } = useContext(AppContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const anchorElRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const goToProfile = () => {
    setMenuOpen(false);
    navigate("/profile/info");
  };

  const handleLogout = () => {
    logoutMutate();
    navigate("/login");
  };

  return (
    <>
      {isAuthorized ? (
        <Stack>
          <Box
            ref={anchorElRef}
            onClick={toggleMenu}
            sx={{ cursor: "pointer" }}
          >
            <Avatar>
              {user?.firstName[0]}
              {user?.lastName[0]}
            </Avatar>
          </Box>
          <Menu
            open={isMenuOpen}
            anchorEl={anchorElRef?.current}
            onClose={() => setMenuOpen(false)}
          >
            <MenuItem onClick={goToProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Stack>
      ) : (
        <Button size="large" variant="outlined" color="secondary" href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export { Profile };
