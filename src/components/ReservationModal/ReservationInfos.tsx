import React from 'react';
import styled from 'styled-components';
import PeriodInfo from './PeriodInfo';
import PersonnelInfo from './PersonnelInfo';

const ReservationInfos = () => (
  <ReservationInfoContainer>
    <PeriodInfo />
    <Border />
    <PersonnelInfo />
  </ReservationInfoContainer>
);

export default ReservationInfos;

const ReservationInfoContainer = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('column', 'center', 'center')}
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;
  margin-top: 24px;
`;

const Border = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
