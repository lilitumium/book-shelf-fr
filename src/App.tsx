import { useState } from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import { ThemeProvider } from "@mui/material";
const { VITE_USER_ID_KEY } = import.meta.env;

import { Router } from "@components";
import { addToFavorites, fetchUserById, QUERYKEY } from "@api";
import { Language } from "@models";

import { AppContext } from "./context";
import { appTheme } from "./components/Theme";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { enLocale } from "./translations/en";
import { plLocale } from "./translations/pl";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enLocale,
    },
    pl: {
      translation: plLocale,
    },
  },
  fallbackLng: "en",
});

i18n.changeLanguage("en");

function App({ queryClient }: { queryClient: QueryClient }) {
  const [language, setLanguage] = useState(Language.English);
  const userId = localStorage.getItem(VITE_USER_ID_KEY);

  const { mutate } = useMutation(addToFavorites, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERYKEY.USERME);
      queryClient.invalidateQueries(QUERYKEY.FavoriteBooks);
    },
  });
  const { data: userData } = useQuery(
    [QUERYKEY.USERME],
    () => {
      return fetchUserById(Number(userId));
    },
    { enabled: !!userId }
  );

  const onAddToFavorites = (bookId: number) => {
    mutate({ bookId, userId: Number(userId) });
  };

  return (
    <ThemeProvider theme={appTheme}>
      <AppContext.Provider
        value={{
          user: userData,
          isAuthorized: Boolean(userData),
          language,
          setLanguage,
          onAddToFavorites,
        }}
      >
        <Router />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
