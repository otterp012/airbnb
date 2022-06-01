import React, { Dispatch } from 'react';
import SearchBarSection from '../../UI/SearchBarSection';
import Container from '../../UI/Container';
import { ModalType } from '../../types/types';

const Price = ({
  setOpenedModal,
}: {
  setOpenedModal: Dispatch<React.SetStateAction<ModalType>>;
}) => (
  <Container onClick={() => setOpenedModal('PRICE')}>
    <SearchBarSection
      searchBarSectionInfo={[{ name: '요금', placeholder: '금액대 설정', value: '설정 결과 값' }]}
      isLast={false}
    />
  </Container>
);

export default Price;

