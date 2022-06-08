import React from 'react';
import styled, { css } from 'styled-components';
import CardText from './CardsTexts';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Card = ({ img, price, name }) => {
  return (
    <CardContainer>
      <CardImage src={img} />
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
  background: blue;
  border-radius: 10px;
  margin-right: 10px;
`;

const HeartIcon = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 30px;
  right: 10px;
`;
