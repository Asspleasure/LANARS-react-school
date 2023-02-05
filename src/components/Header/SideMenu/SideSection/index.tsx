import { Grid, Stack, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { IRouteNav } from 'shared/interfaces/routes.interface';

export default function SideSection({ route, currentRoute }: { route: IRouteNav; currentRoute: string }): JSX.Element {
  const { path, name, ImageComponent } = route;
  const theme = useTheme();

  return (
    <Grid item >
      <Stack
        component={Link}
        direction="row"
        borderRadius="44px"
        padding="12px 17px"
        width="164px"
        to={path}
        sx={{
          backgroundColor: name === currentRoute ? theme.palette.blue : '',
          color: theme.palette.black,
          textDecoration: 'none',
        }}
      >
        <ImageComponent color={name === currentRoute ? 'primary' : 'inherit'} sx={{ marginRight: '16px' }} />
        <Typography sx={{ ...theme.typography.h3, color: name === currentRoute ? theme.palette.primary.main : theme.palette.black }}>
          {name}
        </Typography>
      </Stack>
    </Grid>
  );
}
