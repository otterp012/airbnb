import React from 'react';
import styled from 'styled-components';

const CustomModal = ({ children, style, closeModal }) => (
  <StyledModal modalStyle={style}>
    {children}
    <ModalBackground onClick={closeModal} />
  </StyledModal>
);

export default CustomModal;

const StyledModal = styled.div`
  position: absolute;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center')};
  ${({ modalStyle }) => modalStyle};
`;

const ModalBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: -1;
`;
