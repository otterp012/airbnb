import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/Container';
import PersonnelSelectSection from './PersonnelSelectSection';

type SelectOptionType = {
  type: 'ADULT' | 'CHILD' | 'INFANT';
  title: string;
  description: string;
};

const selectOptions: SelectOptionType[] = [
  {
    type: 'ADULT',
    title: '성인',
    description: '만 13세 이상',
  },
  {
    type: 'CHILD',
    title: '어린이',
    description: '만 2~12세',
  },
  {
    type: 'INFANT',
    title: '유아',
    description: '만 2세 미만',
  },
];

const PersonnelModal = () => (
  <Container width='400px' height='355px' flexInfo={['column', 'center']}>
    <SelectSectionWrapper>
      {selectOptions.map((selectOption) => (
        <PersonnelSelectSection key={selectOption.type} {...selectOption} />
      ))}
    </SelectSectionWrapper>
  </Container>
);

export default PersonnelModal;

const SelectSectionWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('column', 'center', 'center')}
  padding: 64px;
  width: 100%;
  height: 100%;
`;
