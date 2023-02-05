import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import { Grid, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/hooks";
import { fetchAlbumList, fetchPhotoList } from 'shared/store/actions/actionCreators';
import AlbumCard from "./AlbumCard";
import PageEmpty from 'components/PageEmpty';

export function AlbumContainer(): JSX.Element {
  const albumList = useAppSelector(state => state.albums.albumsList);
  const photoList = useAppSelector(state => state.photos.photosList);
  const albumStatus = useAppSelector(state => state.albums.status);
  const photoStatus = useAppSelector(state => state.photos.status);

  const dispatch = useAppDispatch();
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchAlbumList());
    dispatch(fetchPhotoList());
  }, []);

  if (photoStatus === 'LOADING' || albumStatus === 'LOADING') {
    return (
      <div>
        Loading...
      </div>
    );
  }

  const getTextComponent = () => {
    return (
      <Typography sx={{ ...theme.typography.h3, fontWeight: 400, textAlign: 'center', width: '242px', color: theme.palette.darkGray }}>
        There are no albums yet. Please click <Typography component="span" sx={{ fontWeight: 700 }}>Create album</Typography> to add
      </Typography>
    );
  };

  return albumList.length > 0 ? (
    <Grid item container padding="16px 6px 0px 0px" width="100%" gap="24px">

      {albumList.map(album => (
        <AlbumCard key={album.id} album={album} photoList={photoList} />
      ))}

    </Grid >
  ) : (
    <PageEmpty
      ImageComponent={<PhotoAlbumOutlinedIcon sx={{ fontSize: '172px', color: '#E5EDF2', marginBottom: '20px' }} />}
      marginTop="130px"
      getTextComponent={getTextComponent} />
  );
}
