import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Period from './Period';
import Price from './Price';
import Personnel from './Personnel';
import CalendarModal from '../calendar/CalendarModal';
import PersonnelModal from '../Personnel/PersonnelModal';
import CustomModal from '../../UI/Modal';

type ModalType = 'CALENDAR' | 'PRICE' | 'PERSONNEL' | null;

const SearchBar = () => {
  const [openedModal, setOpenedModal] = useState<ModalType>(null);

  const closeModal = () => {
    setOpenedModal(null);
  };

  const ModalContents = {
    CALENDAR: <CalendarModal />,
    PERSONNEL: <PersonnelModal />,
    // PRICE: <PriceModal />,
  };

  const ModalStyles = {
    CALENDAR: CalendarModalStyle,
    PERSONNEL: PersonnelModalStyle,
    // PRICE: PriceModalStyle,
  };

  return (
    <SearchBarContainer>
      <Period setOpenedModal={setOpenedModal} />
      <Price />
      <Personnel setOpenedModal={setOpenedModal} />
      <SearchButton>
        <SearchIcon />
        <span>검색</span>
      </SearchButton>
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
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-around')};
  width: 916px;
  height: 76px;
  padding: 0 16px;
  border-radius: 60px;
  background: ${({ theme }) => theme.colors.white};
  -webkit-user-select: none;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

const SearchButton = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')};
  height: 32px;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 30px;
  padding: 8px 16px 8px 8px;
  color: ${({ theme }) => theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.125rem;
    font-weight: 700;
    margin-left: 5px;
  }
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

export default SearchBar;
