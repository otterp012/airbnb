import React, { useState } from 'react';
import styled from 'styled-components';
import MiniSearchBar from './MiniSearchBar';

const SearchPageSearchBar = () => {
  const [clicked, setClicked] = useState(false);
  return <MiniSearchBar></MiniSearchBar>;
};

export default SearchPageSearchBar;
