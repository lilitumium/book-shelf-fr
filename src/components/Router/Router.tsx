import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppContext } from "@context";
import {
  MainPage,
  Login,
  Registration,
  CollectionPage,
  FavoriteBooks,
  MyCollections,
  ProfileInfo,
  BookPage,
} from "@pages";

import { ProfilePage } from "../../pages/Profile";
import { Layout } from "../Layout";

const Router = () => {
  const { isAuthorized } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="book/:id" element={<BookPage />} />
          <Route path="collection/:id" element={<CollectionPage />} />
          <Route path="profile/*" element={<ProfilePage />}>
            <Route path="info" element={<ProfileInfo />} />
            <Route path="favorite-books" element={<FavoriteBooks />} />
            <Route path="my-collections" element={<MyCollections />} />
          </Route>
        </Route>
        {!isAuthorized && (
          <>
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<Login />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
