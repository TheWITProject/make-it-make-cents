import * as React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
});

function MMCTheme(){
  return <ThemeProvider theme={theme}> </ThemeProvider>
}

