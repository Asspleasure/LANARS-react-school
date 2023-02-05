import { Grid, SvgIconProps } from '@mui/material';

export default function PageEmpty(
  { ImageComponent,
    marginTop,
    getTextComponent,
  }: {
    ImageComponent: React.ReactElement<SvgIconProps>;
    marginTop: string;
    getTextComponent: () => JSX.Element;
  }): JSX.Element {

  return (
    <Grid item container width="100%" alignItems="center" direction="column" marginTop={marginTop}>
      {ImageComponent}
      {getTextComponent()}
    </Grid>
  );
}
