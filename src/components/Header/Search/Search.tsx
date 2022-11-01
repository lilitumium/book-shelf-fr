import React from "react";
import { TextField, InputAdornment, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SearchProps } from "./Search.props";

const Search: React.FC<SearchProps> = ({ onSearch, ...rest }) => {
  const [value, setValue] = React.useState<string>("");

  const handleSearch = () => {
    if (!value) return;

    onSearch(value);
  };

  return (
    <Container maxWidth={"md"} sx={{ ml: 0 }} {...rest}>
      <TextField
        focused
        color="secondary"
        size="small"
        value={value}
        fullWidth
        placeholder="Search"
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Stack
                justifyContent="center"
                alignItems="center"
                onClick={handleSearch}
                sx={{ cursor: "pointer" }}
              >
                <SearchIcon
                  sx={{
                    transition: "color 0.3s ease-in-out",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                />
              </Stack>
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};
export { Search };
