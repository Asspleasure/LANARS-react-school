import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface IRouteNav {
  name: string;
  path: string;
  ImageComponent: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

export interface IRouteApp {
  path: string;
  Component: () => JSX.Element;
}
