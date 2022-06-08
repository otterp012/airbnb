import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import CardsTitle from './CardsTitle';
import useFetch from '../../hooks/use-fecth';
import SkeletonCard from './SkeletonCard';

const Cards = () => {
  const url =
    'https://test-234b2-default-rtdb.firebaseio.com/:accmodations.json';

  const { data, error } = useFetch<any>(url);

  if (error) {
    return (
      <CardsContainer>
        <CardsTitle />
        {error && <p>정보를 불러오는 데 실패했습니다</p>}
      </CardsContainer>
    );
  }

  return (
    <CardsContainer>
      <CardsTitle />
      {!data &&
        Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)}
      {data &&
        data.map((v, i) => (
          <Card
            id={`${v.id} + ${i}`}
            price={v.price}
            reserved={v.alreadyReserved}
            key={`${v.id} + ${i}`}
            name={v.name}
            data-img={`https://loremflickr.com/300/200/cats?lock=${i}`}
            img={`https://loremflickr.com/300/200/cats?lock=${i}`}
          />
        ))}
    </CardsContainer>
  );
};

export default Cards;

const CardsContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 20px;
  overflow: scroll;
`;
