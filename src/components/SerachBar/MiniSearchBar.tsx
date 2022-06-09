import React from 'react';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';
import SearchButton from './SearchButton';
import { getMonthDateString } from '../../util/calenderUtil';

const MiniSearchBar = ({ onClick }) => {
  const [searchParams] = useSearchParams();

  const getPeriodString = () => {
    const checkInValue = searchParams.get('checkIn');
    console.log(new Date(checkInValue));
    const checkOutValue = searchParams.get('checkOut');
    if (!checkInValue && !checkOutValue) return '날짜 선택';
    const checkInString = checkInValue ? getMonthDateString(new Date(checkInValue.split('.'))) : '';
    const checkOutString = checkOutValue
      ? getMonthDateString(new Date(checkOutValue.split('.')))
      : '';
    return `${checkInString}~${checkOutString}`;
  };

  const getPriceString = () => {
    const minPriceValue = searchParams.get('minPrice');
    const maxPriceValue = searchParams.get('maxPrice');
    if (!minPriceValue && !maxPriceValue) return '금액 범위 설정';
    const minPriceString = minPriceValue ? `₩${Number(minPriceValue).toLocaleString()}` : '';
    const maxPriceString = maxPriceValue ? `₩${Number(maxPriceValue).toLocaleString()}` : '';
    return `${minPriceString}~${maxPriceString}`;
  };

  const getPersonnelString = () => {
    const personnelValue = searchParams.get('personnel');
    if (!personnelValue) return '인원 설정';
    const personnelString = personnelValue ? `게스트 ${personnelValue}명 ` : '';
    return personnelString;
  };

  return (
    <MiniSearchBarContainer onClick={onClick}>
      <ItemContainer>{getPeriodString()}</ItemContainer>
      <ItemDivider />
      <ItemContainer>{getPriceString()}</ItemContainer>
      <ItemDivider />
      <ItemContainer>{getPersonnelString()}</ItemContainer>
      {/* <SearchButton type='MINI' /> */}
    </MiniSearchBarContainer>
  );
};

export default MiniSearchBar;

const MiniSearchBarContainer = styled.div`
  position: absolute;
  left: 33%;
  z-index: 100;
  background-color: white;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-around')}
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 30px;
  padding: 0px 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 15px;
`;

const ItemDivider = styled.div`
  width: 1px;
  height: 20px;
  background: ${({ theme }) => theme.colors.grey};
`;
