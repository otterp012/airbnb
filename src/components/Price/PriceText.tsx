import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/Container';

const PriceText = ({ minPrice, maxPrice }) => {
  const koreanCurrencyConfig = {
    style: 'currency',
    currency: 'KRW',
  };

  const minPirceString = minPrice.toLocaleString('ko-KR', koreanCurrencyConfig);
  const maxPriceString = maxPrice.toLocaleString('ko-KR', koreanCurrencyConfig);
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
