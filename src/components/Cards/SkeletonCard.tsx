import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Container from '../../UI/Container';

const SkeletonCard = () => (
  <CardContainer>
    <CardImage />
    <Container width="400px" height="200px">
      <CardInfoUpside>
        <CardText />
        <HashTags />
        <CardText />
        <CardText />
      </CardInfoUpside>
      <CardInfoDownSide>
        <CardText />
        <TotalAmount />
      </CardInfoDownSide>
    </Container>
    <HeartIcon />
  </CardContainer>
);

export default SkeletonCard;

const CardInfoUpside = styled.div`
  height: 85%;
  width: 268px;
  margin-top: 5px;
`;

const CardInfoDownSide = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('column', 'end', 'flex-start')}
  width: 100%;
`;

const HashTags = styled.div`
  width: 100%;
  height: 14px;
  background: ${({ theme }) => theme.colors.lightGrey2};
  margin: 10px 0;
`;

const TotalAmount = styled.div`
  width: 30%;
  height: 10px;
  background: ${({ theme }) => theme.colors.lightGrey2};
`;

const CardText = styled.div`
  width: 50%;
  height: 12px;
  background: ${({ theme }) => theme.colors.lightGrey2};
  margin-bottom: 3px;
`;

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
  background: ${({ theme }) => theme.colors.lightGrey2};
  border-radius: 10px;
  margin-right: 10px;
`;

const HeartIcon = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 30px;
  right: 10px;
`;
