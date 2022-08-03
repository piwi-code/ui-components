import * as React from 'react';
import {
  createTheme as MuiCreateTheme,
  SimplePaletteColorOptions,
  Theme,
  ThemeOptions,
  darken,
  lighten,
} from '@mui/material/styles';
import { AppTheme } from './app.theme';

const scalingFactor = 8;
const baseHtmlFontSize = 10;

const generatePaletteColor = (hexColour: string, contrastTextColour?: string): SimplePaletteColorOptions => {
  const paletteColor = {
    light: lighten(hexColour, 0.1),
    main: hexColour,
    dark: darken(hexColour, 0.1),
  };

  if (contrastTextColour) {
    return { ...paletteColor, contrastText: contrastTextColour };
  }
  return paletteColor;
};

export const CreateTheme = (appTheme: AppTheme, extendTheme?: Partial<ThemeOptions>): Theme => {
  const baseTheme: ThemeOptions = {
    palette: {
      primary: generatePaletteColor(appTheme.colour.primary),
      secondary: generatePaletteColor(appTheme.colour.secondary),
      background_card: generatePaletteColor(appTheme.colour.backgrounds.card),
      background_hover: generatePaletteColor(appTheme.colour.backgrounds.hover),
      background_inputs: generatePaletteColor(appTheme.colour.backgrounds.inputs),
      background_modal: generatePaletteColor(appTheme.colour.backgrounds.modal),
      background_page: generatePaletteColor(appTheme.colour.backgrounds.page),
      button: generatePaletteColor(appTheme.colour.buttons.background, appTheme.colour.buttons.text),
      text_main: generatePaletteColor(appTheme.colour.text.main),
      text_link: generatePaletteColor(appTheme.colour.text.link),
      text_highlight: generatePaletteColor(appTheme.colour.text.highlight),
      background: {
        default: appTheme.colour.backgrounds.modal,
        paper: appTheme.colour.backgrounds.card,
      },
    },
    typography: {
      fontFamily: appTheme.font.fontFamily,

      // Set the HTML Base font size (px)
      // Useful to set the 10px simplification, remember to set "font-size:62.5%" on the html element
      // https://www.sitepoint.com/understanding-and-using-rem-units-in-css/
      htmlFontSize: baseHtmlFontSize,

      allVariants: {
        color: appTheme.colour.text.main,
      },

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
    },
    components: {
      MuiAutocomplete: {
        styleOverrides: {
          option: {
            '&.Mui-focused': { backgroundColor: appTheme.colour.backgrounds.hover + ' !important' },
            '&[aria-selected="true"].Mui-focused': {
              backgroundColor: appTheme.colour.backgrounds.hover + ' !important',
            },
          },
          paper: {
            backgroundColor: appTheme.colour.backgrounds.inputs,
          },
        },
      },
    },

    // Set the spacing scaling factor (px)
    // Uses the baseHtmlFontSize, example
    // ( scalingFactor / baseHtmlFontSize) * factor = X rem
    // ( 8 / 10 ) * 1 = 0.8rem (8px since baseHtmlFontSize is 10)
    // ( 8 / 16 ) * 1 = 0.5rem (8px since baseHtmlFontSize is 16)
    spacing: (factor: number) => `${((scalingFactor / baseHtmlFontSize) * 10 * factor) / 10}rem`, // * 10 and / 10 to avoid JS IEEE 754 encoding error
  };

  let theme = baseTheme;

  if (extendTheme) {
    theme = { ...baseTheme, ...extendTheme };
  }

  return MuiCreateTheme(theme);
};

declare module '@mui/material/styles' {
  interface Palette {
    background_card: Palette['primary'];
    background_hover: Palette['primary'];
    background_inputs: Palette['primary'];
    background_modal: Palette['primary'];
    background_page: Palette['primary'];
    button: Palette['primary'];
    text_main: Palette['primary'];
    text_link: Palette['primary'];
    text_highlight: Palette['primary'];
  }
  interface PaletteOptions {
    background_card?: PaletteOptions['primary'];
    background_hover?: PaletteOptions['primary'];
    background_inputs?: PaletteOptions['primary'];
    background_modal?: PaletteOptions['primary'];
    background_page?: PaletteOptions['primary'];
    button?: PaletteOptions['primary'];
    text_main?: PaletteOptions['primary'];
    text_link?: PaletteOptions['primary'];
    text_highlight?: PaletteOptions['primary'];
  }
}

// Update the element's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    button: true;
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    button: true;
  }
}

declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides {
    button: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    button: true;
  }
}
