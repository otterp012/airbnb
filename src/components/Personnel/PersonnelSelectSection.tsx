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
import { personnelRange } from '../../constants/constants';

const PersonnelSelectSection = ({ target, title, description }: PersonnelSelectOptionType) => {
  const personnelState = usePersonnelStateContext();
  const dispatchPersonnel = usePersonnelDispatchContext();

  const getMinimumPersonnel = () => {
    if (target === 'ADULT' && (personnelState.CHILD || personnelState.INFANT)) {
      return personnelRange.minPersonnel + 1;
    }
    return personnelRange.minPersonnel;
  };

  const isDecreaseButtonActive = () => {
    const minimum = getMinimumPersonnel();
    return personnelState[target] > minimum;
  };
  const isIncreaseButtonActive = () => personnelState[target] < personnelRange.maxPersonnel;

  const handleDecreaseButtonClick = () => {
    if (!isDecreaseButtonActive()) return;
    dispatchPersonnel({ type: 'DECREASE', payload: target });
  };

  const handleIncreaseButtonClick = () => {
    if (!isIncreaseButtonActive()) return;
    dispatchPersonnel({ type: 'INCREASE', payload: target });
  };

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
          color={isDecreaseButtonActive() ? 'primary' : 'disabled'}
          onClick={handleDecreaseButtonClick}
        />
        <SelectionNumber>{personnelState[target]}</SelectionNumber>
        <AddCircleOutlineOutlinedIcon
          color={isIncreaseButtonActive() ? 'primary' : 'disabled'}
          onClick={handleIncreaseButtonClick}
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
