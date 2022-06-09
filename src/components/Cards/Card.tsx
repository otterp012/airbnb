import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardText from './CardsTexts';
import { SkeletonAnimation } from './SkeletonCard';

const Card = ({
  img,
  price,
  name,
}: {
  img: string;
  price: number;
  name: string;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const imgRef = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver>();

  useLayoutEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver);
    observer.current.observe(imgRef.current);
  }, []);

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setIsVisible(true);
      }
    });
  };
  return (
    <CardContainer>
      <CardImage src={isVisible ? img : undefined} alt="hotels" ref={imgRef} />
      <CardText price={price} name={name} />
      <HeartIcon />
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  position: relative;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')}
  padding: 20px 0;
  width: 100%;
  height: 30%;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
`;

const CardImage = styled.img`
  width: 330px;
  height: 200px;
  border-radius: 10px;
  margin-right: 10px;
  ${SkeletonAnimation}
`;

const HeartIcon = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 30px;
  right: 10px;
`;
