import React, { useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Stack, Tabs, Tab } from "@mui/material";

import { FavoriteBooks } from "./FavoriteBooks";
import { MyCollections } from "./MyCollections";
import { ProfileInfo } from "./ProfileInfo";

import { ProfileProps } from "./Profile.props";

const tabs = [
  { label: "Profile", value: "info" },
  { label: "Favorite Books", value: "favorite-books" },
  // { label: "My Collections", value: "my-collections" },
];

const ProfilePage: React.FC<ProfileProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(
    location.pathname.split("/")[2]
  );

  const handleLogout = () => {
    localStorage.removeItem(VITE_USER_ID_KEY);
    window.location.href = "/login";
  };

  return (
    <Stack spacing={2}>
      <Tabs value={selectedTab}>
        {tabs.map(({ label, value }) => (
          <Tab
            key={value}
            label={label}
            value={value}
            onClick={() => onTabClick(value)}
          />
        ))}
      </Tabs>
      <Routes>
        <Route path="info" element={<ProfileInfo />} />
        <Route path="favorite-books" element={<FavoriteBooks />} />
        <Route path="my-collections" element={<MyCollections />} />
      </Routes>
      {/* <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6">Creacted collections</Typography>
        <Button>
          <Cover
            image={"https://m.media-amazon.com/images/I/51mN3bY0JjL.jpg"}
            title="Collection Name 1"
            creator="Collection Creator"
            tags={["tag1", "tag2", "tag3"]}
            collectionNames={["collection1", "collection2", "collection3"]}
          />
          <Stack direction="column" spacing={1} mx={2}>
            <Button variant="contained" color="success">
              Edit
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </Stack>
        </Button>
        <Button>
          <Cover
            image={"https://m.media-amazon.com/images/I/51mN3bY0JjL.jpg"}
            title="Collection Name 1"
            creator="Collection Creator"
            tags={["tag1", "tag2", "tag3"]}
            collectionNames={["collection1", "collection2", "collection3"]}
          />
          <Stack direction="column" spacing={1} mx={2}>
            <Button variant="contained" color="success">
              Edit
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </Stack>
        </Button>
        <Button>
          <Cover
            image={"https://m.media-amazon.com/images/I/51mN3bY0JjL.jpg"}
            title="Collection Name 1"
            creator="Collection Creator"
            tags={["tag1", "tag2", "tag3"]}
            collectionNames={["collection1", "collection2", "collection3"]}
          />
          <Stack direction="column" spacing={1} mx={2}>
            <Button variant="contained" color="success">
              Edit
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </Stack>
        </Button>
      </Stack> */}
    </Stack>
  );
};

export { ProfilePage };
