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

const PersonnelSelectSection = (
  { isLast }: { isLast: boolean },
  { target, title, description }: PersonnelSelectOptionType,
) => {
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
    <SelectSectionContainer isLast={isLast}>
      <Container flexInfo={['column', 'space-between', 'center', 'wrap']}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
      <Container flexInfo={['row', 'center', 'space-between', 'wrap']}>
        <RemoveCircleOutlineIcon
          fontSize='large'
          color={isDecreaseButtonActive() ? 'primary' : 'disabled'}
          onClick={handleDecreaseButtonClick}
        />
        <SelectionNumber>{personnelState[target]}</SelectionNumber>
        <AddCircleOutlineOutlinedIcon
          fontSize='large'
          color={isIncreaseButtonActive() ? 'primary' : 'disabled'}
          onClick={handleIncreaseButtonClick}
        />
      </Container>
    </SelectSectionContainer>
  );
};
export default PersonnelSelectSection;

const SelectSectionContainer = styled.div<{ isLast: boolean }>`
  width: 250px;
  height: calc(100% - 128px);
  ${({ theme }) => theme.mixin.flexMixin('row', 'space-between', 'space-between')};
  ${({ isLast, theme }) => !isLast && `border-bottom: 1px solid ${theme.colors.lightGrey}`};
`;

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
