import { AppBar, Container, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import logoIcon from 'assets/icons/logo.svg';

export default function Header(): JSX.Element {
  const theme = useTheme();

  return (

    <AppBar position="sticky" sx={{
      width: '100%',
      backgroundColor: 'white',
      boxShadow: 'none',
      padding: '0px 40px',
      borderBottom: `1px solid ${theme.palette.lightBlue}`,
    }}
    >
      <Container disableGutters={ true } maxWidth="lg" sx={{ margin: '0 auto' }}>

        <Toolbar disableGutters={ true } variant="dense" sx={{ width: '100%' }}>
          <Stack direction="row" alignItems="center" height="64px">
            <img src={ logoIcon } width="40px" height="40px" />

            <Typography color="black" sx={{ ...theme.typography.h2, marginLeft: '16px' }}>
              React school
            </Typography>
          </Stack>
        </Toolbar>

      </Container>
    </AppBar >
  );
}

