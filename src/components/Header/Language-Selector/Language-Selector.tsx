import React, { useContext } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

import { AppContext } from "@context";
import { Language } from "@models";

import { LanguageSelectorProps } from "./Language-Selector.props";

const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const languages = Object.values(Language);
  const { language, setLanguage } = useContext(AppContext);

  const handleChange = (event: SelectChangeEvent<Language>) => {
    const value = event.target.value as Language;

    setLanguage(value);
  };

  return (
    <Select
      value={language}
      size="small"
      onChange={handleChange}
      sx={{ color: "white", textTransform: 'uppercase'}}
    >
      {languages.map((lang) => (
        <MenuItem key={lang} value={lang} sx={{ textTransform: "uppercase"}}>
          {lang}
        </MenuItem>
      ))}
    </Select>
  );
};

export { LanguageSelector };
