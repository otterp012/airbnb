import React from 'react';
import styled from 'styled-components';

const BackdropContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 640px;
  background: url('https://user-images.githubusercontent.com/95538993/169955843-f762fdc8-970d-47d2-82f1-d92ec6209cdc.png');
  background-size: cover;
`;

const Backdrop = () => <BackdropContainer />;

export default Backdrop;
