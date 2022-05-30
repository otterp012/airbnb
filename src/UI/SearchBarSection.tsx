import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import CalendarContext from '../store/CalendarContext';

type SearchBarSectionTypes = {
  name: string;
  value: string;
};

const SearchBarSection = ({
  SearchBarSectionInfo,
  isLast = false,
}: {
  SearchBarSectionInfo: SearchBarSectionTypes[];
  isLast: boolean;
}) => {
  const { dispatchCheckedDate } = useContext(CalendarContext);
  const onClickHandler = () => {
    const classified =
      SearchBarSectionInfo[SearchBarSectionInfo.length - 1].name;

    if (classified === '체크아웃') {
      dispatchCheckedDate({ type: 'DELETE' });
    }
  };
  return (
    <SearchBarSectionContainer isLast={isLast}>
      {SearchBarSectionInfo.map(({ name, value }) => (
        <SearchBarSectionItemContainer key={name}>
          <SearchBarName>{name}</SearchBarName>
          <SearchBarValue>{value}</SearchBarValue>
        </SearchBarSectionItemContainer>
      ))}
      <InitButton fontSize="small" onClick={onClickHandler} />
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
