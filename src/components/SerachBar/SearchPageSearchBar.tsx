import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MiniSearchBar from './MiniSearchBar';
import SearchBar from './SearchBar';

const SearchPageSearchBar = () => {
  const [extended, setExtended] = useState(false);

  useEffect(() => {
    setExtended(false);
  }, []);

  const toggleExtended = () => {
    setExtended((prev) => !prev);
  };
  return <>{extended ? <SearchBar /> : <MiniSearchBar onClick={toggleExtended} />}</>;
};

export default SearchPageSearchBar;
