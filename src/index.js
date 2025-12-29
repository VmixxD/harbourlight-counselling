import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import App from './App';

// Custom MUI theme inspired by water and earth tones
let theme = createTheme({
  palette: {
    primary: {
      main: '#2d7c83', // harbour-inspired teal
      light: '#5ea7ad',
      dark: '#1f5a5f',
      contrastText: '#fdfcf9',
    },
    secondary: {
      main: '#c18f6b', // warm clay tone
      light: '#d9b399',
      dark: '#8e654a',
      contrastText: '#1b1b1b',
    },
    background: {
      default: '#f5f2ec',
      paper: '#ffffff',
    },
    text: {
      primary: '#1f2a2f',
      secondary: '#4a575d',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

// Improve readability across breakpoints
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
