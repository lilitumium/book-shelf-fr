import React from "react";
import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { LayoutProps } from "./Layout.props";

const Layout: React.FC<LayoutProps> = () => {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Stack mt={"72px"} flexGrow={1} py={3}>
        <Container>
          <Outlet />
        </Container>
      </Stack>
    </Stack>
  );
};

export { Layout };
