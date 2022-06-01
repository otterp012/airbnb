import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Period from './Period';
import Price from './Price';
import Personnel from './Personnel';
import SearchButton from './SearchButton';
import CalendarModal from '../calendar/CalendarModal';
import PersonnelModal from '../Personnel/PersonnelModal';
import CustomModal from '../../UI/Modal';
import PriceModal from '../Price/PriceModal';
import { ModalType } from '../../types/types';

const SearchBar = () => {
  const [openedModal, setOpenedModal] = useState<ModalType>(null);

  const closeModal = () => {
    setOpenedModal(null);
  };

  const ModalContents = {
    CALENDAR: <CalendarModal />,
    PERSONNEL: <PersonnelModal />,
    PRICE: <PriceModal />,
  };

  const ModalStyles = {
    CALENDAR: CalendarModalStyle,
    PERSONNEL: PersonnelModalStyle,
    PRICE: PriceModalStyle,
  };

  return (
    <SearchBarContainer>
      <Period setOpenedModal={setOpenedModal} />
      <Price setOpenedModal={setOpenedModal} />
      <Personnel setOpenedModal={setOpenedModal} />
      <SearchButton />
      {openedModal && (
        <CustomModal
          children={ModalContents[openedModal]}
          style={ModalStyles[openedModal]}
          closeModal={closeModal}
        />
      )}
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.form`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'flex-start')};
  width: 916px;
  height: 76px;
  padding: 0 16px;
  border-radius: 60px;
  background: ${({ theme }) => theme.colors.white};
  -webkit-user-select: none;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
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

const PriceModalStyle = css`
  display: flex;
  top: 182px;
  left: 40vw;
  ${CommonModalStyle};
`;

export default SearchBar;
