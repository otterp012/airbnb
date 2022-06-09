import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import CardsTitle from './CardsTitle';
import SkeletonCards from './SkeletonCard';

const Cards = () => {
  const LazyCards = lazy(() => import('./LazyCards'));
  return (
    <CardsContainer>
      <CardsTitle />
      <Suspense fallback={<SkeletonCards />}>
        <LazyCards />
      </Suspense>
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
