import React from 'react';
import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

type SearchBarSectionTypes = {
  name: string;
  placeholder: string;
  value: string | undefined;
};

const SearchBarSection = ({
  searchBarSectionInfo,
  isLast,
  initSection,
}: {
  searchBarSectionInfo: SearchBarSectionTypes[];
  isLast: boolean;
  initSection: () => void;
}) => {
  const isAnyValueInputed = () => searchBarSectionInfo.some(({ value }) => value);

  return (
    <SearchBarSectionContainer isLast={isLast}>
      {searchBarSectionInfo.map(({ name, placeholder, value }) => (
        <SearchBarSectionItemContainer key={name}>
          <SearchBarName>{name}</SearchBarName>
          <SearchBarValue data-placeholder={placeholder}>{value}</SearchBarValue>
        </SearchBarSectionItemContainer>
      ))}
      {isAnyValueInputed() && <InitButton fontSize='small' onClick={initSection} />}
    </SearchBarSectionContainer>
  );
};

const SearchBarSectionContainer = styled.div<{ isLast?: boolean }>`
  position: relative;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center')}
  ${({ isLast }) =>
    !isLast &&
    css`
      border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
    `}
    
  padding-right: 63px;

  span {
    display: block;
  }
`;

const SearchBarSectionItemContainer = styled.div`
  width: 110px;
  margin: 0px 24px;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :empty:before {
    content: attr(data-placeholder);
    color: ${({ theme }) => theme.colors.black};
  }
`;

const InitButton = styled(CloseIcon)`
  position: absolute;
  right: 30px;
  background: ${({ theme }) => theme.colors.grey};
  padding: 4px;
  border-radius: 100%;
  margin-left: 26px;
  cursor: pointer;
  z-index: 2;
`;

export default SearchBarSection;
