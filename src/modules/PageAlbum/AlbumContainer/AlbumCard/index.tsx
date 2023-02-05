import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import {AlbumInterface} from "../../../../shared/interfaces/Album.interface";
import { PhotoInterface } from "../../../../shared/interfaces/Photo.interface";
import emptyAlbumIcon from '../../../../assets/icons/emptyAlbum.svg';

export default function AlbumCard({ album, photoList }: { album: AlbumInterface; photoList: PhotoInterface[] }): JSX.Element {
  const [isShown, setIsShown] = useState(false);

  const { description, photos, title } = album;

  const currentAlbumPhotos = photoList.filter(photo => photos.includes(photo.id));

  const theme = useTheme();

  return (
    <Grid
      item
      width="calc(100% / 3 - 16px)"
      padding="0px"
      position="relative"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >

      <Card sx={{ width: '100%', padding: '0px' }} elevation={0}>

        <CardMedia sx={{ borderRadius: '8px', marginBottom: '16px', padding: photos.length === 0 ? '78px' : '' }}
                   component="img"
                   height="280px"
                   image={photos.length === 0 ? emptyAlbumIcon : `data:image/jpeg;base64,${currentAlbumPhotos[0].image}`}
                   alt={title} />

        <CardContent sx={{ padding: '0px' }}>

          <Typography sx={{
            ...theme.typography.h3, marginBotom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
          >
            {photos.length > 0 ? description : 'Album with zero images'}
          </Typography>

          <Typography sx={{ ...theme.typography.body14, color: theme.palette.gray }}>
            {`${photos.length} images`}
          </Typography>

        </CardContent>

      </Card>


      {isShown && (
        <Stack
          width="42px"
          position="absolute"
          height="42px"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: theme.palette.primary.dark,
            borderRadius: '50%',
            top: '12px',
            right: '12px',
            cursor: 'pointer',
          }}
        >
          <Stack width="4px" height="16px" direction="column" justifyContent="space-between">

            <Box sx={{ backgroundColor: theme.palette.white, width: '4px', height: '4px', borderRadius: '50%' }} />
            <Box sx={{ backgroundColor: theme.palette.white, width: '4px', height: '4px', borderRadius: '50%' }} />
            <Box sx={{ backgroundColor: theme.palette.white, width: '4px', height: '4px', borderRadius: '50%' }} />

          </Stack>
        </Stack>
      )}

    </Grid>
  );
}
