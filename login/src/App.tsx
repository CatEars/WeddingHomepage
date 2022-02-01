import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container, CssBaseline, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { login } from './api'
import { serialize } from 'cookie'

const theme = createTheme()

const useStyles = makeStyles({
  top: {
    paddingTop: '2em'
  }
})

const generateCookie = (token: string): string => {
  const currentDate = new Date()
  const fiveDaysAhead = currentDate.getDate() + 5
  const targetDate = new Date()
  targetDate.setDate(fiveDaysAhead)
  return serialize('secret_token', token, {
    expires: targetDate,
    sameSite: true,
    secure: true
  })
}

function App() {

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const secret = (data.get('password') || '') as string
    if (secret.length > 0) {
      login(secret)
        .then(token => {
          console.log(`Got token back: `, token, 'reloading with cookie')
          document.cookie = generateCookie(token)
          window.location.reload()
        })
        .catch(error => {
          console.warn('Error when logging in', error)
        })
    }
  }

  const styles = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Container className={styles.top}>
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Henrik och Sofias Bröllopssida
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate sx={{mt: 1}}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Lösenord"
            id="current-password"
            autoComplete="current-password"
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >Logga In</Button>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App;
