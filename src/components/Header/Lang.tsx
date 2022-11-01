import React from "react";
import { Select, Box, MenuItem } from "@mui/material";

const Lang: React.FC = () => {
  return (
    <Box
       sx={{
          backgroundColor: 'common.white'
       }}>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Language"
        >
          <MenuItem>EN</MenuItem>
          <MenuItem>PL</MenuItem>
        </Select>
    </Box>
  );
};
export { Lang };
