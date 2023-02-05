import { Grid } from '@mui/material';
import { navigationRoutes } from 'shared/helpers/routes';
import SideSection from './SideSection';

export default function SideMenu({ currentRoute, top }: { currentRoute: string; top: string }): JSX.Element {

  return (
    <Grid item container width="164px" sx={{ top }} position="sticky" direction="column">

      {navigationRoutes.map(route => (
        <SideSection key={route.name} route={route} currentRoute={currentRoute} />
      ))}

    </Grid>
  );

}
