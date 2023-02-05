import { createTheme } from '@mui/material';

declare module '@mui/material' {
  interface PaletteOptions {
    black: string;
    white: string;
    gray: string;
    darkGray: string;
    lightBlue: string;
    blue: string;
    darkBlue: string;
    lightBlack: string;
  }
}

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    body14: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      black: string;
      white: string;
      gray: 'rgba(63,74,83,1)';
      darkGray: 'rgba(108,144,118,1)';
      lightBlue: 'rgba(229,237,242,1)';
      blue: 'rgb(121,183,244)';
      darkBlue: 'rgba(23, 134, 237, 1)';
      lightBlack: 'rgba(50, 50, 50, 1)';
      primary: {
        main: string;
        dark: string;
      };
    };
    typography: {
      fontFamily: string;
      h2: {
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
      };
      h3: {
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
      };
      button: {
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
      };
      body14: {
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
      };
    };
  }
}

export const theme = createTheme({
  palette: {
    black: 'rgba(28,27,31,1)',
    white: 'rgba(255,255,255,1)',
    gray: 'rgba(63,74,83,1)',
    darkGray: 'rgba(108,144,118,1)',
    lightBlue: 'rgba(229,237,242,1)',
    blue: 'rgb(227,241,253)',
    darkBlue: 'rgba(23, 134, 237, 1)',
    lightBlack: 'rgba(50, 50, 50, 1)',
    primary: {
      main: 'rgba(23, 134, 237, 1)',
      dark: 'rgba(10, 117, 217, 1)',
    },
  },
  typography: {
    fontFamily: [
      'Saira',
      'sans-serif',
    ].join(),
    h2: {
      fontWeight: 500,
      fontSize: '22px',
      lineHeight: '24px',
      letterSpacing: '0.2px',
    },
    h3: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.2px',
    },
    button: {
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '26px',
      letterSpacing: '0.46px',
    },
    body14: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
      letterSpacing: '0.2px',
    },
  },
});
