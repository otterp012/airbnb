import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/Container';
import { usePriceStateContext } from '../../store/priceStore/PriceContext';
import { numToKOPrice } from '../../util/priceUtil';
import { MAX_PRICE } from '../../constants/graphConstants';

const PriceText = () => {
  const { minPrice, maxPrice } = usePriceStateContext();
  const koreanCurrencyConfig = {
    style: 'currency',
    currency: 'KRW',
  };
  const minPirceString =
    minPrice === null ? numToKOPrice(0) : numToKOPrice(minPrice);

  const maxPriceString = maxPrice
    ? numToKOPrice(maxPrice)
    : numToKOPrice(MAX_PRICE);

  return (
    <Container width="100%" height="100px" flexInfo={['column']}>
      <Title>가격 범위</Title>
      <span>
        {minPirceString}~{maxPriceString}
      </span>
    </Container>
  );
};

export default PriceText;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0;
`;
