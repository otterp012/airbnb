import { createContext, useContext } from 'react';
import { PriceStateType, PriceDispatchType } from './priceTypes';

export const PriceStateContext = createContext<PriceStateType | null>(null);
export const PriceDispatchContext = createContext<PriceDispatchType | null>(null);

export const usePriceStateContext = () => {
  const priceState = useContext(PriceStateContext);
  if (!priceState) throw new Error('Cannot use price provider');
  return priceState;
};

export const usePriceDispatchContext = () => {
  const dispatchPrice = useContext(PriceDispatchContext);
  if (!dispatchPrice) throw new Error('Cannot use price provider');
  return dispatchPrice;
};
