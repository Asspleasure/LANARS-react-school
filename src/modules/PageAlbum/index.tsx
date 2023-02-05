import { Grid, useTheme } from '@mui/material';
import { Container } from '@mui/system';
import SideMenu from 'components/Header/SideMenu';
import { PAGE_ALBUM_NAME } from '../../shared/constants/Routes';
import { AlbumContainer } from './AlbumContainer';
import PageAlbumTitle from './PageAlbumTitle';

export default function PageAlbum(): JSX.Element {
  const theme = useTheme();

  return (
    <>
      <Container disableGutters={true} maxWidth={false} sx={{ width: '100%', padding: '0 40px' }}>
        <Container disableGutters={true} maxWidth="lg" sx={{ margin: '0 auto' }}>
          <Grid container justifyContent="space-between" wrap="nowrap" marginTop="24px">

            <SideMenu currentRoute={ PAGE_ALBUM_NAME } top="85px" />

            <Grid item maxWidth="895px" width="100%">

              <PageAlbumTitle />

              <AlbumContainer />

            </Grid>

          </Grid>
        </Container >
      </Container>
    </>
  );
}
