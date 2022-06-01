import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import CalendarContext from '../store/calendarStore/CalendarContext';

type SearchBarSectionTypes = {
  name: string;
  placeholder: string;
  value: string | undefined;
};

const SearchBarSection = ({
  searchBarSectionInfo,
  isLast,
}: {
  searchBarSectionInfo: SearchBarSectionTypes[];
  isLast: boolean;
}) => {
  const { dispatchCheckedDate } = useContext(CalendarContext);
  const onClickHandler = () => {
    const classified = searchBarSectionInfo[searchBarSectionInfo.length - 1].name;

    if (classified === '체크아웃') {
      dispatchCheckedDate({ type: 'DELETE' });
    }
  };

  const handleInitButtonClick = () => {};

  const isAnyValueInputed = () => searchBarSectionInfo.some(({ value }) => value);

  return (
    <SearchBarSectionContainer isLast={isLast}>
      {searchBarSectionInfo.map(({ name, placeholder, value }) => (
        <SearchBarSectionItemContainer key={name}>
          <SearchBarName>{name}</SearchBarName>
          <SearchBarValue data-placeholder={placeholder}>{value}</SearchBarValue>
        </SearchBarSectionItemContainer>
      ))}
      {isAnyValueInputed() && <InitButton fontSize='small' onClick={handleInitButtonClick} />}
    </SearchBarSectionContainer>
  );
};

const SearchBarSectionContainer = styled.div<{ isLast?: boolean }>`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')}
  ${({ isLast }) =>
    !isLast &&
    css`
      border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
    `}
  padding-right: 35px;
  span {
    display: block;
  }
`;

const SearchBarSectionItemContainer = styled.div`
  width: 110px;
  margin-left: 24px;
  cursor: pointer;
`;

const SearchBarName = styled.span`
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 700;
`;

const SearchBarValue = styled.span`
  color: #4f4f4f;
  line-height: 16px;

  :empty:before {
    content: attr(data-placeholder);
    color: ${({ theme }) => theme.colors.black};
  }
`;

const InitButton = styled(CloseIcon)`
  background: ${({ theme }) => theme.colors.grey};
  padding: 4px;
  border-radius: 100%;
  margin-left: 26px;
  cursor: pointer;
  z-index: 2;
`;

export default SearchBarSection;
