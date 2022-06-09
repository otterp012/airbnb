import React from 'react';
import styled from 'styled-components';
import Container from '@UI/Container';
import { usePersonnelStateContext } from '../../store/personnelStore/PersonnelContext';
import InfoContainer from './InfoContainer';

const PersonnelInfo = () => {
  const personnelState = usePersonnelStateContext();

  return (
    <Container width='100%' height='53px' flexInfo={['row', 'center', 'space-bewteen', 'no-wrap']}>
      <InfoContainer
        title='인원'
        content={personnelState.ADULT + personnelState.CHILD}
        width='100%'
      />
    </Container>
  );
};

export default PersonnelInfo;
