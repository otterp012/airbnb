import React, { useState } from 'react';
import styled from 'styled-components';
import Period from './Period';

// import Price from './Price';
// import Personnel from './Personnel';

const SearchBarContainer = styled.form`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')};
  width: calc(916px - 40px);
  padding: 0 20px;
  height: 76px;
  background: blue;
  border-radius: 60px;
`;

const SearchBar = () => {
  //   const [priceRange, setPriceRange] = useState();

  return (
    <SearchBarContainer>
      <Period />
      {/* <Price />
      <Personnel /> */}
    </SearchBarContainer>
  );
};

export default SearchBar;
