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
  lightGrey2: '#BDBDBD',
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

const boxShadow = {
  normal: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px
  `,
};

const theme = {
  fontSize,
  fontWeight,
  colors,
  mixin,
  boxShadow,
};

export default theme;
