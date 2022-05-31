import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/Container';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const PersonnelSelectSection = ({ type, title, description }) => (
  <Container
    width='calc(100% - 128px)'
    height='calc(100% - 128px)'
    flexInfo={['row', 'space-between', 'space-between']}
  >
    <Container flexInfo={['column', 'space-between', 'center']}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
    <Container flexInfo={['row', 'center', 'space-between']}>
      <RemoveCircleOutlineIcon />
      <SelectionNumber>{1}</SelectionNumber>
      <AddCircleOutlineOutlinedIcon />
    </Container>
  </Container>
);

export default PersonnelSelectSection;

const Title = styled.span`
  display: block;
  font-weight: 700;
  line-height: 23px;
`;

const Description = styled.span`
  display: block;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 20px;
  ${({ theme }) => theme.colors.grey}
`;

const SelectionNumber = styled.span`
  display: block;
  width: 50px;
  text-align: center;
  font-weight: 700;
  font-size: 1.25rem;
`;