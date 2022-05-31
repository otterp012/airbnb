import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/Container';
import PersonnelSelectSection from './PersonnelSelectSection';
import { PersonnelSelectOptionType } from '../../types/types';

const selectOptions: PersonnelSelectOptionType[] = [
  {
    target: 'ADULT',
    title: '성인',
    description: '만 13세 이상',
  },
  {
    target: 'CHILD',
    title: '어린이',
    description: '만 2~12세',
  },
  {
    target: 'INFANT',
    title: '유아',
    description: '만 2세 미만',
  },
];

const PersonnelModal = () => (
  <Container
    width="400px"
    height="355px"
    flexInfo={['column', 'center', 'flex-start', 'wrap']}
  >
    <SelectSectionWrapper>
      {selectOptions.map((selectOption) => (
        <PersonnelSelectSection key={selectOption.target} {...selectOption} />
      ))}
    </SelectSectionWrapper>
  </Container>
);

export default PersonnelModal;

const SelectSectionWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('column', 'center', 'center')}
  padding: 64px 0px;
  width: 100%;
  height: 100%;
`;
