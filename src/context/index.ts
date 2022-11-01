import { createContext } from "react";

import { Language, User } from "@models";

type AppContextType = {
  user?: Omit<User, "password"> | undefined;
  isAuthorized?: boolean;
  language: Language;
  setLanguage: (language: Language) => void;
  onAddToFavorites: (id: number) => void;
};

const AppContext = createContext<AppContextType>({
  user: undefined,
  isAuthorized: false,
  language: Language.English,
  setLanguage: (language: Language) => language,
  onAddToFavorites: (id: number) => id,
});

export { AppContext };
