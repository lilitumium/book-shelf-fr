import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, AppBar, Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import { Search } from "./Search";
import { LanguageSelector } from "./Language-Selector";
import { HeaderProps } from "./Header.props";
import { Profile } from "./Profile";

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();

  const onSearch = (value: string) => {
    console.log("Search value", value);
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <AppBar>
      <Container>
        <Stack direction="row" alignItems="center" spacing={2} py={1}>
          <Stack onClick={goToHome} sx={{ cursor: "pointer" }}>
            <HomeIcon fontSize="large" color="secondary" />
          </Stack>
          <Search onSearch={onSearch} />
          <LanguageSelector />
          <Profile />
        </Stack>
      </Container>
    </AppBar>
  );
};
export { Header };
