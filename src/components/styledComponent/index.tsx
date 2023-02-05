import { ImageListItem } from '@mui/material';
import { styled } from '@mui/system';

export const CustomImageListItem = styled(ImageListItem)(() => ({
  borderRadius: '8px',
  '.MuiImageListItem-img': {
    borderRadius: '8px',
    height: '142px',
    width: '142px',
  },
}));
