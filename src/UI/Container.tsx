import styled, { css } from 'styled-components';

type FlexTypes = [
  'row' | 'column',
  'center' | 'flex-start' | 'flex-end',
  'center' | 'space-between' | 'space-around',
  'wrap' | 'no-wrap',
];

const Container = styled.div<{
  width?: string;
  height?: string;
  flexInfo?: FlexTypes;
}>`
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}

  ${({ flexInfo, theme }) => flexInfo && theme.mixin.flexMixin(...flexInfo)}
`;

export default Container;
