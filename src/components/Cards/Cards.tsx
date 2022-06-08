import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import CardsTitle from './CardsTitle';
const Cards = () => {
  const [cardInfo, setCardInfo] = useState(null);
  useEffect(() => {
    fetch('https://test-234b2-default-rtdb.firebaseio.com/:accmodations.json')
      .then((r) => r.json())
      .then((r) => {
        const test = r.slice(0, 10);
        setCardInfo(test);
      });
  }, []);

  return (
    <CardsContainer>
      <CardsTitle />
      {cardInfo &&
        cardInfo.map((v, i) => (
          <Card
            id={v.id + i}
            price={v.price}
            reserved={v.alreadyReserved}
            key={v.id}
            name={v.name}
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
