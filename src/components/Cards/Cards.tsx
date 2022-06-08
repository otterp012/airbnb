import React from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import Card from './Card';
import CardsTitle from './CardsTitle';
import useFetch from '../../hooks/use-fetch';
import SkeletonCard from './SkeletonCard';

type CardDataType = {
  lng: number;
  lat: number;
  roomId: number;
  name: string;
  address: string;
  imgSrc: string;
  maxPersonnel: number;
  price: number;
  cleaningCostRatio: number;
  serviceCostRation: number;
  taxRation: number;
  alreadyReserver: [
    {
      [key: string]: number;
    },
  ];
};

const Cards = () => {
  const url =
    'https://test-234b2-default-rtdb.firebaseio.com/:accmodations.json';

  const { data, error } = useFetch<CardDataType[]>(url);

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
        Array.from({ length: 4 }).map(() => <SkeletonCard key={uuid()} />)}
      {data &&
        data.map((cardData, i) => (
          <Card
            price={cardData.price}
            key={uuid()}
            name={cardData.name}
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
