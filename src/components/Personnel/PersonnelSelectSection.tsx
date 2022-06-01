import React from 'react';
import styled from 'styled-components';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {
  usePersonnelStateContext,
  usePersonnelDispatchContext,
} from '../../store/personnelStore/PersonnelContext';
import Container from '../../UI/Container';
import { PersonnelSelectOptionType } from '../../store/personnelStore/personnelTypes';

const PersonnelSelectSection = ({ target, title, description }: PersonnelSelectOptionType) => {
  const personnelState = usePersonnelStateContext();
  const dispatchPersonnel = usePersonnelDispatchContext();

  return (
    <Container
      width='calc(100% - 128px)'
      height='calc(100% - 128px)'
      flexInfo={['row', 'space-between', 'space-between', 'wrap']}
    >
      <Container flexInfo={['column', 'space-between', 'center', 'wrap']}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
      <Container flexInfo={['row', 'center', 'space-between', 'wrap']}>
        <RemoveCircleOutlineIcon
          onClick={() => dispatchPersonnel({ type: 'DECREASE', payload: target })}
        />
        <SelectionNumber>{personnelState[target]}</SelectionNumber>
        <AddCircleOutlineOutlinedIcon
          onClick={() => dispatchPersonnel({ type: 'INCREASE', payload: target })}
        />
      </Container>
    </Container>
  );
};
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
