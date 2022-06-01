import React, { useState } from 'react';
import { PriceStateContext, PriceDispatchContext } from './PriceContext';
import { useSearchDataStateContext } from '../searchDataStore/SearchDataContext';

const PriceProvider = ({ children }: { children: React.ReactNode }) => {
  const initialPriceState = useSearchDataStateContext().price;
  const [priceState, setPriceState] = useState(initialPriceState);

  return (
    <PriceStateContext.Provider value={priceState}>
      <PriceDispatchContext.Provider value={setPriceState}>
        {children}
      </PriceDispatchContext.Provider>
    </PriceStateContext.Provider>
  );
};

export default PriceProvider;
