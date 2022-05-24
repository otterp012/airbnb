import { css } from 'styled-components';

const fontSize = {
  xLarge: '3em',
  large: '2em',
  medium: '1.5em',
  small: '1em',
};

const fontWeight = {
  xBold: 900,
  bold: 700,
  sBold: 500,
  regular: 400,
};

const colors = {
  black: '#333',
  grey: '#F5F5F7',
  lightGrey: '#E0E0E0',
  white: '#FFF',
  orange: '#F66B0E',
};

const mixin = {
  flexMixin: (
    direction = 'row',
    align = 'center',
    justify = 'center',
    wrap = 'no-wrap',
  ) => css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    flex-wrap: ${wrap};
  `,
};

const theme = {
  fontSize,
  fontWeight,
  colors,
  mixin,
};

export default theme;
