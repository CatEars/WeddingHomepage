import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container, CssBaseline, Typography } from '@mui/material';

const theme = createTheme()



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Henrik och Sofias Bröllopssida med info!
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
