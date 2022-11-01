import React, { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

import { TextAreaProps } from "./Text-Area.props";

/**
 * Renders TextArea
 */
const TextArea: React.FC<TextAreaProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!value) return;

    onSubmit(value);
    setValue("");
  };

  return (
    <Stack
      spacing={2}
      alignItems="stretch"
      justifyContent="space-between"
      direction="row"
    >
      <TextField
        fullWidth
        placeholder="Add your comment..."
        value={value}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Send
      </Button>
    </Stack>
  );
};

export { TextArea };
