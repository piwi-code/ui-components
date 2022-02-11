import * as React from 'react';
import { adatreeTheme } from './adatree.theme';
import { createTheme, PaletteOptions, Theme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    highlight: Palette['primary'];
    shadow: Palette['primary'];
    monochrome: Palette['primary'];
    typography: Palette['primary'];
  }
  interface PaletteOptions {
    highlight: PaletteOptions['primary'];
    shadow: PaletteOptions['primary'];
    monochrome: PaletteOptions['primary'];
    typography: PaletteOptions['primary'];
  }
}

const appTheme = adatreeTheme;

const palette: PaletteOptions = {
  primary: {
    main: appTheme.colour.primary.main,
  },
  secondary: {
    main: appTheme.colour.secondary.main,
  },
  success: {
    main: appTheme.colour.success,
  },
  highlight: appTheme.colour.highlight,
  shadow: appTheme.colour.shadow,
  monochrome: appTheme.colour.monochrome,
  typography: appTheme.colour.typography,
};

export const theme: Theme = createTheme({
  palette: {
    ...palette,
  },
  typography: {
    fontFamily: appTheme.font.fontFamily,

    // Set the HTML Base font size (px)
    // Useful to set the 10px simplification, remember to set "font-size:62.5%" on the html element
    // https://www.sitepoint.com/understanding-and-using-rem-units-in-css/
    htmlFontSize: appTheme.font.baseHtmlFontSize,

    h1: {
      fontSize: '3rem',
      letterSpacing: '0',
      lineHeight: '1.1',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 600,
      letterSpacing: '0.07px',
      lineHeight: '1.6',
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 600,
      letterSpacing: '0.07px',
      lineHeight: '1.6',
    },
    h4: {
      fontSize: '1.6rem',
      fontWeight: 600,
      letterSpacing: '0.07px',
      lineHeight: '1.5',
    },
    body1: {
      fontSize: '1.6rem',
      letterSpacing: '0.1px',
      lineHeight: '1.4',
    },
    body2: {
      fontSize: '1.4rem',
      lineHeight: '1.5',
      letterSpacing: '0.3px',
    },
    subtitle1: {
      fontSize: '1.6rem',
      fontWeight: 500,
      letterSpacing: '0.1px',
      lineHeight: '1.4',
    },
    subtitle2: {
      fontSize: '1.6rem',
      letterSpacing: '0.1px',
      lineHeight: '1.4',
    },
    button: {
      color: appTheme.colour.secondary.main,
    },
  },

  // Set the spacing scaling factor (px)
  // Uses the baseHtmlFontSize, example
  // ( scalingFactor / baseHtmlFontSize) * factor = X rem
  // ( 8 / 10 ) * 1 = 0.8rem (8px since baseHtmlFontSize is 10)
  // ( 8 / 16 ) * 1 = 0.5rem (8px since baseHtmlFontSize is 16)
  spacing: (factor: number) =>
    `${((appTheme.spacing.scalingFactor / appTheme.font.baseHtmlFontSize) * 10 * factor) / 10}rem`, // * 10 and / 10 to avoid JS IEEE 754 encoding error
});

//   overrides: {
//     MuiLink: {
//       root: {
//         color: appTheme.colour.secondary,
//       },
//       underlineHover: {
//         textDecoration: 'none',
//       },
//     },
//     MuiTypography: {
//       gutterBottom: {
//         marginBottom: 30,
//       },
//     },
//   },
