import * as React from 'react';
import {  createTheme } from "@mui/material";


export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#96A054',
      light: '#B7BE88',
    },
    secondary: {
      main: '#D7DCBC',
    },
    background: {
      default: '#D7DCBC',
      paper: '#E0C3A3',
    },
    text: {
      primary: '#3E4224',
    },
    divider: '#3E4224',
     },
    typography: {
        fontFamily: 'Lora',
      },
});

