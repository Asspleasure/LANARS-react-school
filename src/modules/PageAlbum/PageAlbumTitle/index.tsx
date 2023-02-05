import { Button, Grid, Typography, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SwapVertIcon from '@mui/icons-material/SwapVert';

export default function AlbumPageTitle(): JSX.Element {
  const theme = useTheme();

  return (
    <Grid container
          maxWidth="895px"
          width="100%"
          height="72px"
          justifyContent="space-between"
          alignItems="center"
    >
      <Grid item>
        <Typography sx={{ ...theme.typography.h2, marginLeft: '24px' }}>
          Albums
        </Typography>
      </Grid>

      <Grid item>
        <Button variant="text" size="large" sx={{ padding: '0px' }} startIcon={<AddIcon fontSize="large" />}>
          create album
        </Button>
        <Button variant="text" size="large" sx={{ padding: '0px', marginLeft: '43px' }} startIcon={<SwapVertIcon fontSize="large" />}>
          by date added
        </Button>
      </Grid>
    </Grid>
  );
}
