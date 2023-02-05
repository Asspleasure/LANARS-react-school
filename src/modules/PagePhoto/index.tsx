import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Button, Container, Grid } from '@mui/material';
import API from 'core/services/API';
import { Photo } from 'core/services/back-end/api-classes';
import { getBase64StringFromDataURL } from 'core/services/fistInit';
import { ChangeEvent } from 'react';
import { PAGE_PHOTO_NAME } from '../../shared/constants/Routes';
import { PhotoTypeUpload } from '../../shared/helpers/uploadPhoto';
import { useAppDispatch } from 'shared/hooks/hooks';
import { PhotoInterface } from '../../shared/interfaces/Photo.interface';
import {pushPhoto} from '../../shared/store/actions/actionCreators';
import ListPhotos from './ListPhotos/ListPhotos';
import SideMenu from 'components/Header/SideMenu';

export default function PhotoPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const photo = new Photo();

  const onUploadHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {

    const photoFiles = target.files;

    if (photoFiles) {

      for (const file of photoFiles) {
        if (PhotoTypeUpload(file.type)) {
          const reader = new FileReader();

          reader.onloadend = () => {
            const base64File = getBase64StringFromDataURL(reader.result as string);

            API.post(photo.route, {
              image: base64File,
              size: file.size,
              date: file.lastModified,
              type: file.type,
            }).then(newPhoto => dispatch(pushPhoto(newPhoto as PhotoInterface)))
              .catch(error => {
                throw new Error(error);
              });
          };

          reader.readAsDataURL(file);
        }
      }
    }
  };

  return (
    <>
      <Container disableGutters={true} maxWidth={false} sx={{ padding: '0 40px', width: '100%' }}>
        <Container disableGutters={true} maxWidth="lg" sx={{ margin: '0 auto' }}>
          <Grid container justifyContent="space-between" wrap="nowrap" marginTop="24px" gap={17}>

            <SideMenu currentRoute={ PAGE_PHOTO_NAME } top="85px" />

            <Grid item>
              <ListPhotos />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            component="label"
            startIcon={<FileUploadOutlinedIcon />}
            sx={{ position: 'fixed', bottom: '40px', right: '40px' }}
          >
            Upload photo
            <input hidden accept="image/*" multiple type="file" onChange={onUploadHandler} />
          </Button>

        </Container >
      </Container>
    </>
  );
}
