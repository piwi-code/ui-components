import { Global } from '@emotion/react';
import React from 'react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={{
        '*': {
          padding: 0,
          margin: 0,
        },

        '*, *:before, *:after': {
          boxSizing: 'inherit',
        },

        html: {
          fontFamily: 'sans-serif',
          fontSize: '62.5%',
          boxSizing: 'border-box',
        },

        body: {
          fontSize: '1.6rem',
        },

        'ol, ul': {
          listStyle: 'none',
        },

        a: {
          textDecoration: 'none',
        },

        'a:active': {
          color: 'inherit',
        },

        '.adt-container': {
          containerType: 'inline-size',
        },

        '.adt-card': {
          flexBasis: '50%',
        },

        /* Legacy browser's that do not support @container */
        '@media (min-width: 900px)': {
          '.adt-card': {
            flexBasis: '25%',
          },
        },

        '@container (min-width: 0px)': {
          '.adt-card': {
            flexBasis: '100%',
          },
        },

        '@container (min-width: 300px)': {
          '.adt-card': {
            flexBasis: '50%',
          },
        },

        '@container (min-width: 600px)': {
          '.adt-card': {
            flexBasis: '25%',
          },
        },
      }}
    />
  );
};
