import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import ReactDOM from "react-dom";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#cccad9',
      dark: '#322667',
    },
    secondary: {
      main: '#f7c9d5',
      dark: '#e09cc0',
    },
    text: {
      primary: '#322667',
    },
    divider: '#322667',

    },
  })

export default function DefaultProps() {
  return (
    <ThemeProvider theme={theme}>
      <Button>hello</Button>
    </ThemeProvider>
  );
}
