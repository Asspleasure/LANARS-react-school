import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import { IRouteApp, IRouteNav } from 'shared/interfaces/routes.interface';
import {PAGE_ALBUM_NAME, PAGE_PHOTO_NAME, PAGE_FAVORITE_NAME, PAGE_FAVORITE, PAGE_ALBUM, PAGE_PHOTO} from '../constants/Routes';
import PageAlbum from '../../modules/PageAlbum';
import PagePhoto from '../../modules/PagePhoto';

export const navigationRoutes: IRouteNav[] = [
  {
    name: PAGE_PHOTO_NAME,
    path: PAGE_PHOTO,
    ImageComponent: PhotoOutlinedIcon,
  },
  {
    name: PAGE_ALBUM_NAME,
    path: PAGE_ALBUM,
    ImageComponent: PhotoAlbumOutlinedIcon,
  },
  {
    name: PAGE_FAVORITE_NAME,
    path: PAGE_FAVORITE,
    ImageComponent: StarBorderPurple500OutlinedIcon,
  },
];

export const appRoutes: IRouteApp[] = [
  {
    path: PAGE_PHOTO,
    Component: PagePhoto,
  },
  {
    path: PAGE_ALBUM,
    Component: PageAlbum,
  },
];
