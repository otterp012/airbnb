import React, { useState } from 'react';
import { PriceStateContext, PriceDispatchContext } from './PriceContext';
import { PriceStateType } from './priceTypes';

export const initialPriceState: PriceStateType = {
  minPrice: null,
  maxPrice: null,
};

const PriceProvider = ({ children }: { children: React.ReactNode }) => {
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
