import React from 'react';
import { useRecoilValue } from 'recoil';
import Card from './Card';
import { parsedCardsDataQuery } from '../../store/searchPageStore/searchPageStore';

const LazyCards = () => {
  const cards = useRecoilValue(parsedCardsDataQuery);
  return cards.map((card: CardDataType, i: number) => (
    <Card
      key={card.roomId}
      accommInfo={{
        ...card,
        imgSrc: `https://loremflickr.com/300/200/cats?lock=${i}`,
      }}
    />
  ));
};

export default LazyCards;
