import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PeriodInfo from './PeriodInfo';
import PersonnelInfo from './PersonnelInfo';
import CustomModal from '@UI/Modal';
import { ModalType } from '../../types/types';
import CalendarModal from '../calendar/CalendarModal';
import PersonnelModal from '../Personnel/PersonnelModal';

const ReservationInfos = () => {
  const [openedModal, setOpenedModal] = useState<ModalType>(null);
  const ModalStyles = {
    CALENDAR: CalendarModalStyle,
    PERSONNEL: PersonnelModalStyle,
  };

  const ModalContents = {
    CALENDAR: <CalendarModal />,
    PERSONNEL: <PersonnelModal />,
  };

  return (
    <ReservationInfoContainer>
      <PeriodInfo setOpenedModal={setOpenedModal} />
      <Border />
      <PersonnelInfo setOpenedModal={setOpenedModal} />
      {openedModal && (
        <CustomModal style={ModalStyles[openedModal]}>{ModalContents[openedModal]}</CustomModal>
      )}
    </ReservationInfoContainer>
  );
};
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

const CommonModalStyle = css`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 40px;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

const CalendarModalStyle = css`
  top: 182px;
  left: 250px;
  ${CommonModalStyle};
`;

const PersonnelModalStyle = css`
  top: 182px;
  right: 250px;
  ${CommonModalStyle};
`;
