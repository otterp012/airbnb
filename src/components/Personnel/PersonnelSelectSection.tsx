import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/Container';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const PersonnelSelectSection = ({ type, title, description }) => {
  return (
    <Container width='100%' flexInfo={['row', 'space-between', 'center']}>
      <Container flexInfo={['column', 'space-between', 'center']}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
      <Container flexInfo={['row', 'space-between', 'center']}>
        <RemoveCircleOutlineIcon />
        <AddCircleOutlineOutlinedIcon />
      </Container>
    </Container>
  );
};

export default PersonnelSelectSection;

const Title = styled.span`
  display: block;
  font-weight: 700;
`;

const Description = styled.span`
  display: block;
  font-weight: 400;
  font-size: 0.875rem;
  ${({ theme }) => theme.colors.grey}
`;
