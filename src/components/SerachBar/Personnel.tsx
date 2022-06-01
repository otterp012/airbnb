import React, { Dispatch } from 'react';
import SearchBarSection from '../../UI/SearchBarSection';
import { usePersonnelStateContext } from '../../store/personnelStore/PersonnelContext';
import Container from '../../UI/Container';
import { ModalType } from '../../types/types';

const Personnel = ({
  setOpenedModal,
}: {
  setOpenedModal: Dispatch<React.SetStateAction<ModalType>>;
}) => {
  const personnelState = usePersonnelStateContext();
  const personnelValue =
    personnelState.ADULT + personnelState.CHILD + personnelState.INFANT !== 0
      ? `게스트 ${personnelState.ADULT + personnelState.CHILD}명, 유아 ${personnelState.INFANT}명`
      : undefined;

  return (
    <Container onClick={() => setOpenedModal('PERSONNEL')}>
      <SearchBarSection
        searchBarSectionInfo={[{ name: '인원', placeholder: '게스트 추가', value: personnelValue }]}
        isLast
      />
    </Container>
  );
};

export default Personnel;
