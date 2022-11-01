import React from "react";
import { AlertTitle, Alert as AlertMUI, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { AlertProps } from "./Alert.props";

/**
 * Renders Alert
 */
const Alert: React.FC<AlertProps> = ({
  open,
  title,
  description,
  onClose,
  ...rest
}) => {
  if (!open) return null;

  return (
    <AlertMUI
      sx={{
        position: "absolute",
        top: "20px",
        right: "20px",
      }}
      action={
        <Box onClick={onClose} sx={{ cursor: "pointer" }}>
          <CloseIcon />
        </Box>
      }
      {...rest}
    >
      <AlertTitle>{title}</AlertTitle>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>
    </AlertMUI>
  );
};

export { Alert };
