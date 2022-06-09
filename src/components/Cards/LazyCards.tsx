import React from 'react';
import { useRecoilValue } from 'recoil';
import Card from './Card';
import { parsedCardsDataQuery } from '../../store/searchPageStore/searchPageStore';

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

const LazyCards = () => {
  const cards = useRecoilValue(parsedCardsDataQuery);
  return cards.map((card, i) => (
    <Card
      price={card.price}
      key={card.roomId}
      name={card.name}
      img={`https://loremflickr.com/300/200/cats?lock=${i}`}
      id={card.roomId}
    />
  ));
};

export default LazyCards;
