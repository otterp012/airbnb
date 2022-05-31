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
      SearchBarSectionInfo={[{ name: '요금', value: '금액대 설정' }]}
      isLast={false}
    />
  </Container>
);

export default Price;
// const Personnel = ({ setOpenedModal }) => {
//   const { personnel } = useContext(PersonnelContext);
//   const personnelValue =
//     personnel.ADULT + personnel.CHILD + personnel.INFANT === 0
//       ? '게스트 추가'
//       : `게스트 ${personnel.ADULT + personnel.CHILD}명, 유아 ${personnel.INFANT}명`;

//   return (
//     <Container onClick={() => setOpenedModal('PERSONNEL')}>
//       <SearchBarSection SearchBarSectionInfo={[{ name: '인원', value: personnelValue }]} isLast />
//     </Container>
//   );
// };

// export default Personnel;
