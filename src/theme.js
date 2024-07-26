// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 400,
    },
  },
});

export default theme;
