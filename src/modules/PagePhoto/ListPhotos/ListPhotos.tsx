import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { ImageList, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';
import PageEmpty from '../../../components/PageEmpty';
import { CustomImageListItem} from '../../../components/styledComponent';
import { useAppDispatch, useAppSelector } from 'shared/hooks/hooks';
import { fetchPhotoList } from 'shared/store/actions/actionCreators';

export default function ListPhotos(): JSX.Element {

  const dispatch = useAppDispatch();
  const photosList = useAppSelector(state => state.photos.photosList);
  const photoStatus = useAppSelector(state => state.photos.status);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchPhotoList());
  }, []);

  const getTextComponent = () => {
    return (
      <Typography sx={{ ...theme.typography.h3, fontWeight: 400, textAlign: 'center', width: '242px', color: theme.palette.darkGray }}>
        There are no photos yet. Please click <Typography component="span" sx={{ fontWeight: 700 }}>Upload photo</Typography> to add
      </Typography>
    );
  };

  if (photoStatus === 'LOADING') {
    return (
      <div>
        Loading
      </div>
    );
  }

  return photosList.length > 0 ? (
    <ImageList cols={6} rowHeight={142} gap={8} sx={{display: 'flex', flexWrap: 'wrap'}}>
      {
        photosList.map(photo => (
          <CustomImageListItem key={photo.id}>
            <img
              src={`data:image/png;base64,${photo.image}`}
              alt={photo.description} />
          </CustomImageListItem>
        ))
      }
    </ImageList >
  ) : (
    <PageEmpty
      ImageComponent={<InsertPhotoOutlinedIcon sx={{ fontSize: '172px', color: theme.palette.lightBlue, marginBottom: '20px' }} />}
      marginTop="210px"
      getTextComponent={getTextComponent} />
  );
}
